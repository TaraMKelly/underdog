import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button'

function NavBar({ setUser }) {

  let history=useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push('/')
      }
    });
  }
  return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nfl">NFL</Link>
        {/* <Link>MLB</Link>
        <Link>EPL</Link> */}
        <Button size="small" onClick={handleLogoutClick}>Logout</Button> 
      </nav>
  );
}
// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 0;
//   line-height: 1;

//   a {
//     color: inherit;
//     text-decoration: none;
//   }
// `;

export default NavBar;