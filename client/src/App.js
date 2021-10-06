import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login"
import Main from './components/Main'
import Nav from "./components/Nav";
import GameContainer from "./components/GameContainer";
import "./index.css"
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
// import CommentPage from "./components/CommentPage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#4e3199'
    },
    secondary: {
      main: '#7bd194'
    }
  }
})

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return <ThemeProvider theme={theme}> <Login onLogin={setUser} /> </ThemeProvider>;


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav setUser={setUser} />
      </div>
      <Switch>
        <Route exact path="/">
          <Main user={user} />
        </Route>
        <Route exact path="/nfl">
          <GameContainer user={user} />
        </Route>
        {/* <Route path="/mlb">
          <GameContainer />
        </Route>
        <Route path="/epl">
          <GameContainer />
        </Route> */}
        {/* <Route exact path="/comments">
          <CommentPage user={user}/>
        </Route> */}
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}
export default App;