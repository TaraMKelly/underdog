import { useState } from "react"
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import Button from '@mui/material/Button'

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
      <>
        {/* <Logo>A Logo</Logo> */}
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            {/* <Divider /> */}
            <p>
              Don't have an account? &nbsp;
              <Button onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            {/* <Divider /> */}
            <p>
              Already have an account? &nbsp;
              <button onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </>
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