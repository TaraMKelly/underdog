import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from "./components/Login"
import Main from './components/Main'
import Nav from "./components/Nav";
import GameContainer from "./components/GameContainer";
import CommentPage from "./components/CommentPage";
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [user, setUser] = useState(null);
  const [nflGames, setGames] = useState([])
  // const [comments, setComments] = useState([])

  const nfl_odds_url = `https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=${process.env.REACT_APP_ODDS}&regions=us&markets=h2h,spreads&oddsFormat=american`
  useEffect(() => {
      fetch(nfl_odds_url)
          .then(res => res.json())
          .then((data) => setGames(data))
  }, [])

//   useEffect(() => {
//     fetch('/comments')
//         .then(res => res.json())
//         .then((data) => setComments(data))
// }, [])

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
          <GameContainer nflGames={nflGames}/>
        </Route>
        {/* <Route path="/mlb">
          <GameContainer />
        </Route>
        <Route path="/epl">
          <GameContainer />
        </Route> */}
        <Route exact path="/comments">
          <CommentPage nflGames={nflGames} user={user}/>
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </>
  );
}
export default App;