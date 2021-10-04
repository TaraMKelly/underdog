import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
// import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link'


function NavBar({ setUser }) {

  let history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        history.push('/')
      }
    });
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container spacing={1}>
          <Link component={RouterLink} color="white" underline="hover" to="/">
            Home
          </Link>
        </Grid>
        <Grid container spacing={1}>
          <Link component={RouterLink} color="white" underline="hover" to="/nfl">
            NFL
          </Link>
          {/* <Link>MLB</Link>
        <Link>EPL</Link> */}
        </Grid>
        <Grid justifyContent="flex-end">
          <Button size="small" color="secondary" variant="contained" onClick={handleLogoutClick}>Logout</Button>
        </Grid>
      </Toolbar>
    </AppBar>
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