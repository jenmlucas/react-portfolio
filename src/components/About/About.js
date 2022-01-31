import React from "react";
import placeholder from "../../assets/images/me/placeholder.png";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  aboutMeHeader: {
    textAlign: "center",
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
  },
});

function About() {
  const terms = useStyles();
  return (
    <section>
      <div className={terms.about}>
        <Avatar
          src={placeholder}
          sx={{ width: 400, height: 400 }}
          alt="Jennifer Lucas"
          variant="square"
        ></Avatar>

        <p className={terms.bio}>
          <h1 className={terms.aboutMeHeader}> About Me </h1>
          Full- stack web developer with a background in Medical, which has
          instilled strengths in meeting deadlines, organization, creativity,
          learning quickly on the job, and communication with teamwork. Working
          towards earning a certificate from the University of Arizona through a
          coding bootcamp, with newly developed skills in HTML, CSS, JavaScript,
          React.js, MySql, and responsive web design. I worked on a team project
          to create an interactive application that allows you to search for
          National parks near your location while also displaying your local
          weather using your IP address. My abilities to communicate along with
          my leadership skills, makes me a valuable addition to any team.
          Passionate about developing responsive websites that haven’t been seen
          before for potential clients. <br></br>
          <br></br>
          <Button
            href="https://github.com/jenmlucas"
            target="blank"
            size="small"
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/jennifer-lucas-478599218/"
            target="blank"
            size="small"
          >
            LinkedIN
          </Button>
          <Button href="#" target="blank" size="small">
            Resume
          </Button>
        </p>
      </div>
    </section>
  );
}

export default About;
