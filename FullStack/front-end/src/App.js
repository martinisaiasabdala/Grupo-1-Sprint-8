import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import CardCustomerList from './components/CardCustomerList';
import LoanBranchList from './components/LoanBranchList';
import BranchList from './components/BranchList';
import Home from './components/Home';

// Componentes previamente creados
import CustomerChangeAddress from './components/CustomerChangeAddress';
import LoanRequestForm from './components/LoanRequestForm';
import LoanDelete from './components/LoanDelete';
import LoanList from './components/LoanList';

// Nuevo componente
import UpdateAddress from './components/UpdateAddress';

import React, { useState } from 'react';
import { Footer } from './components/Footer';
import Aside from './components/Aside';

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
      <header className="header">
        <a href="/" aria-label="Volver al inicio">
          <img src="/imagenes/banking-logo.png" alt="Banking Logo" />
        </a>
      </header>
      <div className='bodyapp'>
        <Aside components={components} setActiveComponent={setActiveComponent} />
        <main className="App-content">
          <section className='container_main'>
            {activeComponent && components[activeComponent]}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
