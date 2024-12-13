import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const LoanList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const fetchLoans = async () => {
      try {
        // Basic Authentication credentials
        const username = 'nino';
        const password = 'ninonino12';
        const response = await api.get('api/clientes/prestamos/', {
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: username,
            password: password,
          },
        });
        setLoans(response.data);
      } catch (error) {
        console.error('Error fetching loans:', error);
      }
    };

    fetchLoans();
  }, []);

  return (
    <div>
      <h1>Mis Préstamos</h1>
      {loans.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {loans.map((loan) => (
            <div
              key={loan.loan_id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                width: '300px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p><strong>Monto:</strong> ${loan.loan_total}</p>
              <p><strong>Fecha de Vencimiento:</strong> {loan.loan_date}</p>
              <p><strong>Estado:</strong> {loan.loan_status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No tienes préstamos registrados.</p>
      )}
    </div>
  );
};

export default LoanList;
