import logo from './logo.svg';
import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import LoanList from './components/LoanList';
import BranchList from './components/BranchList'; 
import CardCustomerList from './components/CardCustomerList';
import LoanBranchList from './components/LoanBranchList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountList />
        <CustomerDetail />
        <LoanList />
        <BranchList />
        <CardCustomerList />
        <LoanBranchList />

      </header>
      
    </div>
  );
}

export default App;
