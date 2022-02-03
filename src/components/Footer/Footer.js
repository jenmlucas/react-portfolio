import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#9C27B0",
    textAlign: "center",
  }
});

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <BottomNavigationAction 
        icon={<GitHubIcon fontSize="large" />}
        href="https://github.com/jenmlucas"
        target="_blank"
      /> 
      <BottomNavigationAction
        icon={<LinkedInIcon fontSize="large" />}
        href="https://www.linkedin.com/in/jennifer-lucas-478599218/"
        target="_blank"
        /> 
         <BottomNavigationAction
        icon={<TwitterIcon fontSize="large" />}
        href="https://www.linkedin.com/in/jennifer-lucas-478599218/"
        target="_blank"
        /> 
    </footer>
  );
}
