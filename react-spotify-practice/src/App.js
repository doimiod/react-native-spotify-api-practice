import logo from './logo.svg';
import './App.css';

function App() {

  const CLIENT_ID = "0831afd089104c548d3a09db8b5a75f0"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;