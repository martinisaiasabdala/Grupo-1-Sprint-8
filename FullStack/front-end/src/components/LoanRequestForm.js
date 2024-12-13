import { useState } from 'react';
import api from '../api/axiosConfig.js';

const LoanRequestForm = () => {
  const [fk_loan_branch, setFkLoanBranch] = useState('');
  const [fk_loan_customer, setFkLoanCustomer] = useState('');
  const [loan_total, setLoanTotal] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = 'nico'; // empleado
    const password = '1234';

    const payload = {
      fk_loan_branch,
      fk_loan_customer,
      loan_total
    };

    try {
      const response = await api.post('api/empleados/solicitudPrestamo/', payload, {
        auth: {
          username,
          password
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status >= 200 && response.status < 300) {
        setMessage('Préstamo solicitado (simulado) con éxito.');

        const fakeLoan = {
          loan_id: Date.now(),
          loan_total: parseInt(loan_total, 10),
          branch_name: `Sucursal ${fk_loan_branch} (Simulada)`,
          loan_status: 'PENDING',
          loan_date: new Date().toISOString().slice(0,10),
          isFake: true  // Marcamos este préstamo como simulado
        };

        const storedLoans = JSON.parse(localStorage.getItem('fake_loans') || '[]');
        storedLoans.push(fakeLoan);
        localStorage.setItem('fake_loans', JSON.stringify(storedLoans));

        // Limpiar formulario
        setFkLoanBranch('');
        setFkLoanCustomer('');
        setLoanTotal('');
      } else {
        setMessage('No se pudo simular la solicitud del préstamo.');
      }
    } catch (error) {
      console.error('Error creando préstamo simulado:', error);
      setMessage('Ocurrió un error al solicitar el préstamo simulado.');
    }
  };

  return (
    <div>
      <h1>Solicitud de Préstamo (Empleado - Simulado)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID de Sucursal:
          <input 
            type="number"
            value={fk_loan_branch}
            onChange={(e) => setFkLoanBranch(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          ID de Cliente:
          <input 
            type="number"
            value={fk_loan_customer}
            onChange={(e) => setFkLoanCustomer(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Total del Préstamo:
          <input 
            type="number"
            step="1"
            value={loan_total}
            onChange={(e) => setLoanTotal(e.target.value)}
            required
          />
        </label>
        <br/>
        <button type="submit">Solicitar Préstamo (Simulado)</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanRequestForm;
