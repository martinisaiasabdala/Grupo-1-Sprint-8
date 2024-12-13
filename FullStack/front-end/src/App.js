import logo from './logo.svg';
import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import LoanList from './components/LoanList';
import BranchList from './components/BranchList'; 
import CardCustomerList from './components/CardCustomerList';
import LoanBranchList from './components/LoanBranchList';
import Home from './components/Home';
import React, { useState } from 'react';

function App() {
  const components = {
    AccountList: <AccountList />, 
    CustomerDetail: <CustomerDetail />,
    LoanList: <LoanList />,
    BranchList: <BranchList />,
    CardCustomerList: <CardCustomerList />,
    LoanBranchList: <LoanBranchList />,
    Home: <Home />,
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
