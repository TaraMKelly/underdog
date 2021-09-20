import { useEffect, useState } from "react"
import Login from "./Login"
// import { Switch, Route } from "react-router-dom";
// import Main from './Main'
import Nav from "./Nav";
// import 'semantic-ui-css/semantic.min.css'


function App() {
  const [user, setUser] = useState(null);

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
      <Nav setUser={setUser}/>
      Bonjour
      {/* <Main/> */}
    </>
  );
}
export default App;