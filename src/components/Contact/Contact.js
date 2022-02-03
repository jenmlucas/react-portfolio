import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { checkMessage, validateEmail } from "../../utils/helpers";
import contactPhoto from "../../assets/contact/contact.png";
import placeholder from "../../assets/me/placeholder.png"

const useStyles = makeStyles({
  form: {
    display: "flex",
    marginTop: 30,
    marginBottom: 30,
  },
  spacingImageOne: {
    width: 500,
    paddingLeft: 200,
  },
  spacingImageTwo: {
    paddingLeft: 300,
  },
  image: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: 500,
    marginTop: 30
  },
  email: {
    textAlign: "center",
    width: "320%",
    height: 60,
    borderRadius: "10%",
  },
  user: {
    textAlign: "center",
    width: "320%",
    height: 80,
    borderRadius: "10%",
  },
  message: {
    textAlign: "center",
    width: "320%",
    height: 150,
    borderRadius: "10%",
  },
  title: {
    textAlign: "center",
    color: "#383D5C"
  },
  button: {
    textAlign: "center",
    marginTop: 10,
    width: 100,
    height: 50
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
      setErrorMessage(`Your message must have a minimun of 4 characters`);
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <form className={classes.form}>
        <img src={contactPhoto} width="20%" height="500" alt="contact me photo" className={classes.spacingImageOne}></img>
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
        </div>
        {/* <img src={placeholder} width="20%" height="500" alt="placeholder" className={classes.spacingImageTwo}></img> */}
      </form>
      {errorMessage && (
        <div>
          <p className={classes.errorText}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
