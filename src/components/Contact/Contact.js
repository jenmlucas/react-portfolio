import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { checkPassword, validateEmail } from "../../utils/helpers";

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  email: {
    textAlign: "center",
    width: "10%",
    height: 50,
    borderRadius: "10%"
  },
  user: {
    textAlign: "center",
    width: "11%",
    height: 70,
    borderRadius: "10%"
  },
  password: {
    textAlign: "center",
    width: "12%",
    height: 100,
    borderRadius: "10%"
  },
  title: {
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    marginTop: 10
  },
  errorText: {
    textAlign: "center",
  },
});

export default function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or username is invalid");
      return;
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    setUserName("");
    setPassword("");
    setEmail("");
  };

  return (
        <div>
            <h2> My Email</h2>
            <p>jenmlucas1@gmail.com</p>
        <h1 className={classes.title}> Send a Message </h1>
        <form className={classes.form} >
          <input className={classes.email}
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input className={classes.user}
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input className={classes.password}
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button className={classes.button} type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className={classes.errorText}>{errorMessage}</p>
          </div>
        )}
      </div>
  );
}
