import logo from './logo.svg';
import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import LoanList from './components/LoanList';
import BranchList from './components/BranchList'; 
import CardCustomerList from './components/CardCustomerList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountList />
        <CustomerDetail />
        <LoanList />
        <BranchList />
        <CardCustomerList />

      </header>
      
    </div>
  );
}

export default App;
