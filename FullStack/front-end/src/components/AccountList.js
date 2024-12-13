import { useEffect, useState } from 'react';
import api from '../api/axiosConfig.js';


const AccountList = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        // Basic Authentication credentials
        const username = 'nino';
        const password = 'ninonino12';
        const response = await api.get('api/cuentas/', {
          auth: {
            username: username,
            password: password,
          },
        });
        setAccounts(response.data);

      }
      catch (error) {
        console.error('Error fetching accounts:', error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div>
      <h1>Mis Cuentas</h1>
      {accounts.length > 0 ? (
        <ul>
          {accounts.map((account) => (
            <li key={account.id}>
              <p>Tipo de Cuenta: {account.tipo}</p>
              <p>Saldo: ${account.customer_account_balance}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes cuentas registradas.</p>
      )}
    </div>
  );
};

export default AccountList;
