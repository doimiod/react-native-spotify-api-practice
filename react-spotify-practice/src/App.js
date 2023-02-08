import {useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  const CLIENT_ID = "0831afd089104c548d3a09db8b5a75f0"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("")

  useEffect(() =>{

    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {

      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      console.log(token)
    }


  }, [])

  const logout = () => {

    setToken("")
    window.localStorage.removeItem("token")

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>


        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        <button onClick={logout}>Logout</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

// ocalhost:3000/#access_token=BQCq9axudhCypGNkTDtNJtfQBIGvdINaQiu8vjkojXfrzB31CVuWNLeFlH_8M4CYTRQnkCJvp_Q2AilVdjQPRe_rEPeYCzwycf-2Y5H5lAlVy4cRcU4rtlS51XAw1AT06xrCz18agSS42w_YxM3VPCAn64bwzL-vuyD46Ci9127RdFpNZFz3L-2BxV9lxfeZzRME&token_type=Bearer&expires_in=3600

export default App;