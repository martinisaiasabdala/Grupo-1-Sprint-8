import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';

const CardCustomerList = () => {
  const [targetas, setTargetas] = useState([]);

  useEffect(() => {
    const fetchSucursales = async () => {
      try {
        // Basic Authentication credentials
        const username = 'nico';
        const password = '1234';
        const response = await api.get('api/empleados/tarjetasXcliente/1', {//elegimos al cliente 1
          headers: {
            'Content-Type': 'application/json',
          },
          auth: {
            username: username,
            password: password,
          },});
        setTargetas(response.data);
      } catch (error) {
        console.error('Error fetching sucursales:', error);
      }
    };

    fetchSucursales();
  }, []);

return (
    <div>
        <h1>Tarjetas Del Cliente</h1>
        <p>Total de tarjetas: {targetas.length}</p>
        {targetas.length > 0 ? (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {targetas.map((t) => (
                    <div key={t.card_id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', width: '200px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <p><strong>Número de Tarjeta:</strong> {t.card_number}</p>
                        <p><strong>Marca:</strong> {t.marca}</p>
                        <p><strong>Nombre:</strong> {t.cliente}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>No tienes tarjetas registradas.</p>
        )}
    </div>
);
};

export default CardCustomerList;