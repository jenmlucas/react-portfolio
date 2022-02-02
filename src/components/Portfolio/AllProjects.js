import  React from "react";
import Portfolio from "./Project";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//     display: {
//       display: "flex",
//       flexDirection: "row"
//     }
// })

export default function Projects() {
  // const classes = useStyles();
    const projectContent= [
      {
        title: "dghf",
        description: "hdfhgdjf",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "gfhghfx",
        description: "xghxxc",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "adfgda",
        description: "adgdag",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "adfga",
        deployedLink: "",
      },
      {
        title: "agdffd",
        description: "adfgafg",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "afgag",
        description: "aagfdga",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "adgad",
        description: "afdgagf",
        image: require('../../assets/projectPhoto/placeholder.png'),
        githubLink: "",
        deployedLink: "",
      }
    ];

  return (
      <div>
      <Portfolio project = {projectContent}/>
      </div>
  );
}



