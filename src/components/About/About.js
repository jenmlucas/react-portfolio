import React from "react";
import placeholder from "../../assets/me/placeholder.png";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  aboutMeHeader: {
    textAlign: "center",
    fontSize: 80,
    color: "#383D5C",
    textDecoration: "underline"
  },
  about: {
    display: "flex",
    alignItems: "center",
    marginLeft: 350,
  },
  bio: {
    width: "50%",
    alignItems: "center",
    marginLeft: 50,
    MarginBottom: 10,
    fontSize: 23,
  },
  bioTitle: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "#383D5C"
  },
  skills: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 10,
    fontSize: 40,
    color: "#383D5C",
    textDecoration: "underline"
  },
  skillsLiTop: {
    marginTop: 10,
    listStyle: "none"
  },
  skillLi: {
    listStyle: "none"
  },
  skillList: {
    display: "flex",
    textAlign: "center",
    fontSize: 23,
    marginBottom: 50,
    marginLeft: 500
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
      <h2 className={classes.skills}> Skills </h2>
      <ul className={classes.skillList}>
        <ul>
          Languages: 
          <li className={classes.skillsLiTop}>HTML</li>
          <li className={classes.skillLi}>CSS</li>
          <li className={classes.skillLi}>JavaScript</li>
        </ul>
        <ul>
          MERN Stack:
          <li className={classes.skillsLiTop}>MongoDB</li>
          <li className={classes.skillLi}>Express</li>
          <li className={classes.skillLi}>React</li>
          <li className={classes.skillLi}>Node</li>
        </ul>
        <ul>
          Styling:
          <li className={classes.skillsLiTop}>Bootstrap</li>
          <li className={classes.skillLi}>Foundation</li>
          <li className={classes.skillLi}>Material UI</li>
        </ul>
        <ul>
          Applications:
          <li className={classes.skillsLiTop}>Github</li>
          <li className={classes.skillLi}>Git</li>
          <li className={classes.skillLi}>Heroku</li>
        </ul>
        <ul>
          Additional:
          <li className={classes.skillsLiTop}>HandleBars</li>
          <li className={classes.skillLi}>MySql</li>
          <li className={classes.skillLi}>Sequlize</li>
          <li className={classes.skillLi}>GraphQL</li>
        </ul>
      </ul>
    </section>
  );
}
