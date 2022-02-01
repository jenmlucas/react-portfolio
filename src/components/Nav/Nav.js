import React from "react";
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles({});


function Nav() {
  const classes = useStyles();

  return (
      <header>
      <h1>Jennifer Lucas</h1>
      <h2>Full-Stack Web Developer</h2>
      <nav>
        <ul>
          <li>
              <span>About Me</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span>Portfolio</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
