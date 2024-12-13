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
      <h1>Targetas Del Cliente</h1>
      {targetas.length > 0 ? (
        <ul>
          {targetas.map((t) => (
            <li key={t.card_id}>
              <p>Numero de Tarjeta: {t.card_number}</p>
              <p>Marca: {t.marca}</p>
              <p>Nombre: {t.cliente}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes targetas registrados.</p>
      )}
    </div>
  );
};

export default CardCustomerList;