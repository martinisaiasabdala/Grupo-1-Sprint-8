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
        <ul>
          {loans.map((loan) => (
            <li key={loan.loan_id}>
              <p>Monto: ${loan.loan_total}</p>
              <p>Fecha de Vencimiento: {loan.loan_date}</p>
              <p>Estado: {loan.loan_status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes préstamos registrados.</p>
      )}
    </div>
  );
};

export default LoanList;
