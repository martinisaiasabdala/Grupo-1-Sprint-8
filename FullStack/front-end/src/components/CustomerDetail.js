import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const CustomerDetail = () => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomerDetail = async () => {
      try {
        // Basic Authentication credentials
        const username = 'nino';
        const password = 'ninonino12';
        const response = await api.get('api/clientes/', {
          auth: {
            username: username,
            password: password,
          },
        });
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerDetail();
  }, []);

  return (
    <div>
      <h1>Detalles del Cliente</h1>
      {customer.length > 0 ? (
        <ul>
          {customer.map((c) => (
            <li key={c.loan_id}>
              <p>Nombre: {c.customer_name}</p>
              <p>Apellido: {c.customer_surname}</p>
              <p>DNI: {c.customer_DNI}</p>
              <p>Fecha De Nacimientp: {c.customer_birth}</p>

            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes clientes registrados.</p>
      )}
    </div>
  );
};

export default CustomerDetail;
