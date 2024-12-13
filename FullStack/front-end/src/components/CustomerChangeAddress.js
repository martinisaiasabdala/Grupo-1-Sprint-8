import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const CustomerChangeAddress = () => {
  const [address, setAddress] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCustomerAddress = async () => {
      try {
        const username = 'nino';
        const password = 'ninonino12';
        // Obtenemos el cliente actual (GET), ya que RetrieveUpdateAPIView soporta GET
        // El endpoint: api/clientes/direccion (sin slash final)
        const response = await api.get('api/clientes/direccion', {
          auth: {
            username: username,
            password: password,
          },
        });
        // response.data debería contener al cliente con su dirección
        // Asumiendo que el serializer incluye la info de la dirección
        // Supongamos que hay un campo customer_address que es un objeto con address_name
        // Depende del serializer, pero asumiremos que se envía "customer_address": {"address_name": "Calle X"}
        if (response.data && response.data.customer_address && response.data.customer_address.address_name) {
          setCurrentAddress(response.data.customer_address.address_name);
        }
      } catch (error) {
        console.error('Error fetching customer address:', error);
      }
    };

    fetchCustomerAddress();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = 'nino';
    const password = 'ninonino12';
    try {
      // Debemos enviar el nuevo valor de dirección.
      // Asumimos que el serializer CustomerSerializerDireccion 
      // espera un campo `customer_address` con subcampo `address_name`.
      // O que simplemente le mandamos { "customer_address": { "address_name": "Nueva Direccion" } }
      const payload = {
        customer_address: {
          address_name: address
        }
      };

      const response = await api.put('api/clientes/direccion', payload, {
        auth: {
          username: username,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200 || response.status === 201) {
        setMessage('Dirección actualizada con éxito.');
        setCurrentAddress(address);
        setAddress('');
      } else {
        setMessage('No se pudo actualizar la dirección.');
      }
    } catch (error) {
      console.error('Error updating address:', error);
      setMessage('Ocurrió un error al actualizar la dirección.');
    }
  };

  return (
    <div>
      <h1>Cambiar Dirección del Cliente</h1>
      {currentAddress && <p>Dirección actual: {currentAddress}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nueva Dirección:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <button type="submit">Actualizar Dirección</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CustomerChangeAddress;
