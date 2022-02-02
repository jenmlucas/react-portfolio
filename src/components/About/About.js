import React from "react";
import placeholder from "../../assets/me/placeholder.png";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  root: {
    
  },
  aboutMeHeader: {
    textAlign: "center",
    fontSize: 60,
  },
  about: {
    display: "flex",
    alignItems: "center",
    marginLeft: 500,
  },
  bio: {
    width: "40%",
    alignItems: "center",
    marginLeft: 20,
    MarginBottom: 10,
    fontSize: 18,
  },
  bioTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  skills: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 40,
  },
  skillList: {
    display: "flex",
    justifyContent: "center",
    fontSize: 20,
  },
  buttonContainer: {
    textAlign: "center"
  },
  button: {
    fontSize: 20
  }
});

export default function About() {
  const classes = useStyles();
  return (
    <section>
      <h1 className={classes.aboutMeHeader}>About Me</h1>
      <div className={classes.about}>
        <Avatar
          src={placeholder}
          sx={{ width: 400, height: 400 }}
          alt="Jennifer Lucas"
          variant="square"
        ></Avatar>

        <div className={classes.bio}>
          <p className={classes.bioTitle}>Biography</p>
          Full- stack web developer with a background in Medical, which has
          instilled strengths in meeting deadlines, organization, creativity,
          learning quickly on the job, and communication with teamwork. Working
          towards earning a certificate from the University of Arizona through a
          coding bootcamp, with newly developed skills in HTML, CSS, JavaScript,
          React.js, MySql, and responsive web design. I worked on a team project
          to create an interactive application that allows you to search for
          National parks near your location while also displaying your local
          weather using your IP address. My abilities to communicate along with
          my leadership skills, makes me a valuable addition to any team
          Passionate about developing responsive websites that haven`t been seen
          before for potential clients. <br></br>
          <br></br>
        </div>
      </div>
      <div className={classes.buttonContainer}>
      <Button className={classes.button}
        href="https://github.com/jenmlucas"
        target="blank"
        size="small"
      >
        Github
      </Button>
      <Button className={classes.button}
        href="https://www.linkedin.com/in/jennifer-lucas-478599218/"
        target="blank"
        size="small"
      >
        LinkedIN
      </Button>
      </div>
      <h2 className={classes.skills}> Skills </h2>
      <ul className={classes.skillList}>
        <ul>
          Languages:
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul>
          MERN Stack:
          <li>MongoDB</li>
          <li>Express</li>
          <li>React</li>
          <li>Node</li>
        </ul>
        <ul>
          Styling:
          <li>Bootstrap</li>
          <li>Foundation</li>
          <li>Material UI</li>
        </ul>
        <ul>
          Applications:
          <li>Github</li>
          <li>Git</li>
          <li>Heroku</li>
        </ul>
        <ul>
          Additional:
          <li>HandleBars</li>
          <li>MySql</li>
          <li>Sequlize</li>
          <li>GraphQL</li>
        </ul>
      </ul>
    </section>
  );
}
