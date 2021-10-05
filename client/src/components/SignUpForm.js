import { useState } from "react";
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles ({
  field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
  }
})


function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const classes = useStyles()
  // const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    // setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        className={classes.field}
        variant="filled"
        label="Username"
        required
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        className={classes.field}
        variant="filled"
        label="Password"
        required
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <TextField
        className={classes.field}
        variant="filled"
        label="Confirm Password"
        required
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        autoComplete="current-password"
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        type="submit">
        Sign Up
      </Button>
      {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
    </form>
  );
}

export default SignUpForm;