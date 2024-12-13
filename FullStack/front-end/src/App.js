import logo from './logo.svg';
import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import LoanList from './components/LoanList';
import BranchList from './components/BranchList'; 
import CardCustomerList from './components/CardCustomerList';
import LoanBranchList from './components/LoanBranchList';
import React, { useState } from 'react';

function App() {
  const components = {
    AccountList: <AccountList />,
    CustomerDetail: <CustomerDetail />,
    LoanList: <LoanList />,
    BranchList: <BranchList />,
    CardCustomerList: <CardCustomerList />,
    LoanBranchList: <LoanBranchList />
  };

  const [activeComponent, setActiveComponent] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          {Object.keys(components).map((key) => (
            <button key={key} onClick={() => setActiveComponent(key)}>
              {key}
            </button>
          ))}
        </nav>
        {components[activeComponent]}
      </header>
    </div>
  );
}

export default App;
