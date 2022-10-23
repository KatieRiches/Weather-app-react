import logo from './logo.svg';
import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Weather app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
  <Weather />
  
      </header>
    </div>
  );
}

export default App;
