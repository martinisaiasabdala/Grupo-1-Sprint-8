import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const BranchList = () => {
  const [sucursales, setSucursales] = useState([]);

  useEffect(() => {
    const fetchSucursales = async () => {
      try {
        const response = await api.get('api/sucursales');
        setSucursales(response.data);
      } catch (error) {
        console.error('Error fetching sucursales:', error);
      }
    };

    fetchSucursales();
  }, []);

  return (
    <div>
      <h1>Sucursales</h1>
      {sucursales.length > 0 ? (
        <ul>
          {sucursales.map((s) => (
            <li key={s.branch_id}>
              <p><strong>Nombre:</strong> {s.branch_name}</p>
              <p><strong>Dirección:</strong> {s.branch_address}</p>
              <p><strong>Teléfono:</strong> {s.branch_phone}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes sucursales registrados.</p>
      )}
    </div>
  );
};

export default BranchList;