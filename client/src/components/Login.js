import { useState } from "react"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button'

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div >
      {/* <Logo>A Logo</Logo> */}
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
                color="primary" onClick={() => setShowLogin(false)}>
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
                color="primary" onClick={() => setShowLogin(true)}>
                Log In
              </Button>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

// const Logo = styled.h1`
//   font-family: "Permanent Marker", cursive;
//   font-size: 3rem;
//   color: deeppink;
//   margin: 8px 0 16px;
// `;

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login;