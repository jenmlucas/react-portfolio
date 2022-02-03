import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { checkMessage, validateEmail } from "../../utils/helpers";
import contactPhoto from "../../assets/contact/contact.png";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const useStyles = makeStyles({
  form: {
    display: "flex",
    marginTop: 30,
    marginBottom: 30,
  },
  spacingImageOne: {
    width: 500,
    paddingLeft: 400,
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 300,
    marginTop: 100,
  },
  email: {
    textAlign: "center",
    width: 250
  },
  user: {
    textAlign: "center",
    width: 250
  },
  message: {
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    color: "#383D5C",
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
    }
    if (!checkMessage(message)) {
      setErrorMessage(`Your message must have a minimun of 2 characters`);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <form className={classes.form}>
        <img
          src={contactPhoto}
          width="20%"
          height="500"
          alt="contact me photo"
          className={classes.spacingImageOne}
        ></img>
        <div className={classes.image}>
          <h1 className={classes.title}> Send a Message </h1>
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
          <TextareaAutosize
          className={classes.message}
            aria-label="minimum height"
            minRows={3}
            placeholder="message"
            style={{ width: 250 }}
            value={message}
            name="message"
            onChange={handleInputChange}
          />
          <button
            className={classes.button}
            type="button"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
      {errorMessage && (
        <div className={classes.form}>
          <p className={classes.errorText}>{errorMessage}</p>
        </div>
      )}
        </div>
      </form>
    </div>
  );
}
