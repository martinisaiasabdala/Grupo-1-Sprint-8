import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const LoanBranchList = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const fetchSucursales = async () => {
      try {
        // Basic Authentication credentials
        const username = 'nico';
        const password = '1234';
        const response = await api.get('api/empleados/prestamosXsucursal/1', {//elegimos la sucursal 1
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: username,
            password: password,
          },});
          setPrestamos(response.data);
      } catch (error) {
        console.error('Error fetching prestamos:', error);
      }
    };

    fetchSucursales();
  }, []);

  return (
    <div>
      <h1>Prestamos De la Sucursal</h1>
      {prestamos.length > 0 ? (
        <ul>
          {prestamos.map((p) => (
            <li key={p.loan_id}>
              <p>Nombre de la Sucursal: {p.branch_name}</p>
              <p>Total del Prestamo: {p.loan_total}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes prestamos registrados.</p>
      )}
    </div>
  );
};

export default LoanBranchList;