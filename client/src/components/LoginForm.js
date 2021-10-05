import React, { useState } from "react";
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

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const classes = useStyles()
  // const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
    <div>
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit">
          Login
        </Button>
        {/* <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField> */}
      </form>
    </div>
  );
}

export default LoginForm