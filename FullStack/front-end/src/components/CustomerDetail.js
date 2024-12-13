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
      {customer ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {customer.map((c) => (
            <div key={c.loan_id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '300px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <p><strong>Nombre:</strong> {c.customer_name}</p>
              <p><strong>Apellido:</strong> {c.customer_surname}</p>
              <p><strong>DNI:</strong> {c.customer_DNI}</p>
              <p><strong>Fecha De Nacimiento:</strong> {new Date(c.customer_birth).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes clientes registrados.</p>
      )}
    </div>
  );
}

export default CustomerDetail;
