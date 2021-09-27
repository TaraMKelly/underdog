import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login"
import Main from './components/Main'
import Nav from "./components/Nav";
import GameContainer from "./components/GameContainer";
// import CommentPage from "./components/CommentPage";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [user, setUser] = useState(null);
  // const [nflGames, setGames] = useState([])
  // const [comments, setComments] = useState([])

  // useEffect(() => {
  //     fetch('/games')
  //         .then(res => res.json())
  //         .then((data) => setGames(data))
  // }, [])
  // console.log(nflGames)


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Nav setUser={setUser} />
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
    </>
  );
}
export default App;