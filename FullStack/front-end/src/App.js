import logo from './logo.svg';
import './App.css';
import AccountList from './components/AccountList';
import CustomerDetail from './components/CustomerDetail';
import LoanList from './components/LoanList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AccountList />
        <CustomerDetail />
        <LoanList />
      </header>
      
    </div>
  );
}

export default App;
