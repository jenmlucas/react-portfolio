import { React, useState } from "react";
import Portfolio from "./Project";

export default function Projects() {
  const projectContent= useState([
    {
      title: "dghf",
      description: "hdfhgdjf",
      image: "../assets/me/placeholder1.png",
      githubLink: "",
      deployedLink: "",
    },
    {
      title: "gfhghfx",
      description: "xghxxc",
      image: "../assets/me/placeholder.png",
      githubLink: "",
      deployedLink: "",
    },
    {
      title: "adfgda",
      description: "adgdag",
      image: "../assets/me/placeholder.png",
      githubLink: "adfga",
      deployedLink: "",
    },
    {
      title: "agdffd",
      description: "adfgafg",
      image: "../assets/me/placeholder.png",
      githubLink: "",
      deployedLink: "",
    },
    {
      title: "afgag",
      description: "aagfdga",
      image: "../assets/me/placeholder.png",
      githubLink: "",
      deployedLink: "",
    },
    {
      title: "adgad",
      description: "afdgagf",
      image: "../assets/me/placeholder.png",
      githubLink: "",
      deployedLink: "",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
       <Portfolio Projects = {projectContent}/>
      </div>
    </div>
  );
};


