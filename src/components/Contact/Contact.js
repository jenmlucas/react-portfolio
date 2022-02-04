import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { checkMessage, validateEmail } from "../../utils/helpers";
import contactPhoto from "../../assets/contact/contact.png";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  image: {
    display: "flex",
    flexDirection: "column"
  },
  email: {
    display: "flex",
    textAlign: "center",
    width: 250,
  },
  title: {
    textAlign: "center",
    color: "#383D5C",
    marginLeft: 30
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
    <Box textAlign="center">
      <Grid
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="space-around" 
        style={{ minHeight: "60vh" }}
      >
        <Grid xs={12} flexWrap="wrap" className={classes.image}>
          <img
            src={contactPhoto}
            width="400"
            height="500"
            alt="contact me photo"
          ></img>
          <div className={classes.form}>
          <Grid padding={6} marginTop={10}> 
            <h1 className={classes.title}>
              Send a Message
            </h1>
            <input
              className={classes.email}
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              className={classes.email}
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <TextareaAutosize
              className={classes.email}
              aria-label="minimum height"
              minRows={3}
              placeholder="message"
              style={{ width: 252 }}
              value={message}
              name="message"
              onChange={handleInputChange}
            />
            <button
              alignItems="center"
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
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
