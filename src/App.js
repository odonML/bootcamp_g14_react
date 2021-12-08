import './App.css';
import Calculator from './components/Calculator';
import Greeting from './components/Greeting';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Greeting name="Odon" lastName="lozada"/>
      {/* <Calculator operation="suma" valueOne="4" valueTwo="2" /> */}
      <Calculator operation="resta" valueOne="4" valueTwo="2" valueThree="-"/>
      </header>

    </div>
  );
}

export default App;
