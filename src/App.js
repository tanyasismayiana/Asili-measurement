import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Store from './context/Store';
import Links from './components/Links';

function App() {

  return (
    <Store>
      <Header/>
      <Links/>
    </Store>
  );

}

export default App;
