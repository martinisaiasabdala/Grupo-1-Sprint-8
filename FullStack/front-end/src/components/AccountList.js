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
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {accounts.map((account, index) => (
            <li key={account.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <p><strong>Cuenta {index + 1}</strong></p>
              <p><strong>Tipo de Cuenta:</strong> {account.tipo}</p>
              <p><strong>Saldo:</strong> ${account.customer_account_balance.toFixed(2)}</p>
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
