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
        <h1>Préstamos de la Sucursal</h1>
        <p>Total de Préstamos: {prestamos.length}</p>
        {prestamos.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {prestamos.map((p) => (
                    <div key={p.loan_id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <p><strong>Nombre de la Sucursal:</strong> {p.branch_name}</p>
                        <p><strong>Total del Préstamo:</strong> {p.loan_total}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>No tienes préstamos registrados.</p>
        )}
    </div>
);
};

export default LoanBranchList;