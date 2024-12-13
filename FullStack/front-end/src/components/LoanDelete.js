import { useState } from 'react';
import api from '../api/axiosConfig.js';

const LoanDelete = () => {
  const [loanId, setLoanId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    // Primero intentamos eliminar un préstamo simulado
    const storedLoans = JSON.parse(localStorage.getItem('fake_loans') || '[]');
    const loanIndex = storedLoans.findIndex(l => l.loan_id === Number(loanId));

    if (loanIndex !== -1) {
      // Hemos encontrado un préstamo simulado con ese ID
      storedLoans.splice(loanIndex, 1);
      localStorage.setItem('fake_loans', JSON.stringify(storedLoans));
      setMessage('Préstamo simulado eliminado con éxito.');
      return;
    }

    // Si no lo encontramos en los simulados, intentamos el DELETE real
    const username = 'nico'; // empleado
    const password = '1234';

    try {
      const response = await api.delete(`api/empleados/eliminarPrestamo/${loanId}`, {
        auth: {
          username,
          password
        }
      });

      if (response.status === 204) {
        setMessage('Préstamo eliminado con éxito (real).');
      } else {
        setMessage('No se pudo eliminar el préstamo. Es posible que no exista o el backend no lo haya creado realmente.');
      }
    } catch (error) {
      console.error('Error deleting loan:', error);
      setMessage('Ocurrió un error al eliminar el préstamo.');
    }
  };

  return (
    <div>
      <h1>Eliminar Préstamo (Empleado)</h1>
      <label>
        ID del Préstamo:
        <input 
          type="number"
          value={loanId}
          onChange={(e) => setLoanId(e.target.value)}
          required
        />
      </label>
      <button onClick={handleDelete}>Eliminar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoanDelete;
