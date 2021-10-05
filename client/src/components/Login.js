import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button';
import styled from "styled-components";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div
        style={{
          position: 'absolute', left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
        <Logo>Underdog</Logo>
      </div>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <div
            style={{
              position: 'absolute', left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            <p>
              Don't have an account? &nbsp;
              <Button
                size="small"
                variant="contained"
                color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </div>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div
            style={{
              position: 'absolute', left: '50%',
              transform: 'translate(-50%, -50%)'
            }}>
            <p>
              Already have an account? &nbsp;
              <Button
                size="small"
                variant="contained"
                color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </div>
        </>
      )}
    </>
  );
}

const Logo = styled.h1`
  font-family: "Rock Salt", cursive;
  font-size: 3rem;
  color: black;
  margin: 8px 0 16px;
  padding-bottom: 50px;
`;

export default Login;