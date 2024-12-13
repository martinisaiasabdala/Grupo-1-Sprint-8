import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const LoanList = () => {
  const [loans, setLoans] = useState([]);
  const [message, setMessage] = useState('');

  const username = 'nino';
  const password = 'ninonino12';

  const fetchLoans = async () => {
    try {
      const response = await api.get('api/clientes/prestamos/', {
        auth: {
          username,
          password,
        },
      });
      const realLoans = response.data || [];

      const storedLoans = JSON.parse(localStorage.getItem('fake_loans') || '[]');
      const allLoans = [...realLoans, ...storedLoans];

      setLoans(allLoans);
      setMessage('');
    } catch (error) {
      console.error('Error fetching loans:', error);
      setMessage('No se pudo obtener la lista de préstamos.');
    }
  };

  useEffect(() => {
    fetchLoans();
  }, []);

  return (
    <div>
      <h1>Mis Préstamos</h1>
      <button onClick={fetchLoans}>Refrescar</button>
      {message && <p>{message}</p>}
      {loans.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {loans.map((loan) => (
            <li
              key={loan.loan_id}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <p><strong>ID del Préstamo:</strong> {loan.loan_id}</p>
              <p><strong>Sucursal:</strong> {loan.branch_name || 'Desconocida'}</p>
              <p><strong>Total del Préstamo:</strong> {loan.loan_total}</p>
              <p><strong>Estado:</strong> {loan.loan_status || 'No definido'}</p>
              <p><strong>Fecha:</strong> {loan.loan_date || 'No definida'}</p>
              {loan.isFake && <p style={{color: 'red'}}>(Préstamo Simulado)</p>}
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
