import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { checkMessage, validateEmail } from "../../utils/helpers";

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
    borderRadius: "10%",
  },
  user: {
    textAlign: "center",
    width: "11%",
    height: 70,
    borderRadius: "10%",
  },
  message: {
    textAlign: "center",
    width: "12%",
    height: 100,
    borderRadius: "10%",
  },
  title: {
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    marginTop: 10,
  },
  errorText: {
    textAlign: "center",
  },
});

export default function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      return;
    } if (!checkMessage(message)) {
      setErrorMessage(
        `Your message must have a minimun of 4 characters`
      );
    return;
  }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1 className={classes.title}> Send a Message </h1>
      <form className={classes.form}>
        <input
          className={classes.email}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          className={classes.user}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
         <input
          className={classes.message}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className={classes.errorText}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
