import { useEffect, useState } from "react"
import Login from "./components/Login"
import Main from './components/Main'
import Nav from "./components/Nav";
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
      <Main />
    </>
  );
}
export default App;