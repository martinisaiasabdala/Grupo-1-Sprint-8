import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import BranchList from './components/BranchList'; 
import CardCustomerList from './components/CardCustomerList';
import LoanBranchList from './components/LoanBranchList';
import Home from './components/Home';

// Componentes previamente creados
import CustomerChangeAddress from './components/CustomerChangeAddress'; 
import LoanRequestForm from './components/LoanRequestForm';
import LoanDelete from './components/LoanDelete';
import LoanList from './components/LoanList';

// Nuevo componente
import UpdateAddress from './components/UpdateAddress';

import React, { useState } from 'react';

function App() {
  const components = {
    Home: <Home />,
    AccountList: <AccountList />,
    CustomerDetail: <CustomerDetail />,
    LoanList: <LoanList />,
    BranchList: <BranchList />,
    CardCustomerList: <CardCustomerList />,
    LoanBranchList: <LoanBranchList />,
    CustomerChangeAddress: <CustomerChangeAddress />,
    LoanRequestForm: <LoanRequestForm />,
    LoanDelete: <LoanDelete />,
    UpdateAddress: <UpdateAddress /> // Agregamos esta línea
  };

  const [activeComponent, setActiveComponent] = useState('Home');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frontend</h1>
        <nav>
          {Object.keys(components).map((key) => (
            <button key={key} onClick={() => setActiveComponent(key)}>
              {key}
            </button>
          ))}
        </nav>
        <div>
          {activeComponent && components[activeComponent]}
        </div>
      </header>
    </div>
  );
}

export default App;
