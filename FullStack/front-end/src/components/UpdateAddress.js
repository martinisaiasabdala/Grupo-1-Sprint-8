import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const UpdateAddress = () => {
  const [currentAddress, setCurrentAddress] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [message, setMessage] = useState('');

  const username = 'nino';
  const password = 'ninonino12';

  // Obtener la dirección actual del cliente
  useEffect(() => {
    const fetchCurrentAddress = async () => {
      try {
        // GET a api/clientes/direccion (RetrieveUpdateAPIView)
        const response = await api.get('api/clientes/direccion', {
          auth: {
            username,
            password
          }
        });
        // La respuesta tendrá el formato { "direccion": { "address_name": "..." } }
        if (response.data && response.data.direccion && response.data.direccion.address_name) {
          setCurrentAddress(response.data.direccion.address_name);
        }
      } catch (error) {
        console.error('Error obteniendo la dirección actual:', error);
        setMessage('No se pudo obtener la dirección actual.');
      }
    };

    fetchCurrentAddress();
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAddress.trim()) {
      setMessage('Por favor, ingresa una nueva dirección.');
      return;
    }

    const payload = {
      direccion: {
        address_name: newAddress
      }
    };

    try {
      // PUT a api/clientes/direccion
      const response = await api.put('api/clientes/direccion', payload, {
        auth: {
          username,
          password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setMessage('Dirección actualizada con éxito.');
        setCurrentAddress(newAddress);
        setNewAddress('');
      } else {
        setMessage('No se pudo actualizar la dirección.');
      }
    } catch (error) {
      console.error('Error actualizando la dirección:', error);
      setMessage('Ocurrió un error al actualizar la dirección.');
    }
  };

  return (
    <div>
      <h1>Actualizar Dirección del Cliente</h1>
      <p><strong>Dirección actual:</strong> {currentAddress || 'Desconocida'}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nueva Dirección:
          <input 
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            required
          />
        </label>
        <br/>
        <button type="submit">Actualizar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateAddress;
