import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import styled from "styled-components";
// import { Menu } from 'semantic-ui-react'

function NavBar({ setUser }) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }


  return (

      <nav>
        <Link to="/">Home</Link>
        <Link to="/nfl">NFL</Link>
        {/* <Link>MLB</Link>
        <Link>EPL</Link> */}
        <button onClick={handleLogoutClick}>Logout</button> 
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