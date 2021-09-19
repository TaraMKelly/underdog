import React from 'react';
// import { NavLink } from 'react-router-dom';
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
    <header>
      {/* <Logo style={{textAlign: "center"}}>Alcoholics not-Anonymous</Logo> */}
      <div>
        {/* <Menu>
          <Menu.Item> 
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/search">Search</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/feed">Feed</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/create">Create a Drink</NavLink>
          </Menu.Item>
          <Menu.Item position="right"> */}
            <button onClick={handleLogoutClick}>Logout</button>
          {/* </Menu.Item>
        </Menu> */}
      </div>
    </header>
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