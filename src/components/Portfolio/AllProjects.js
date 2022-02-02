import  React from "react";
import Portfolio from "./Project";

export default function Projects() {
    const projectContent= [
      {
        title: "dghf",
        description: "hdfhgdjf",
        image: "../../assets/projects/placeholder1.png",
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "gfhghfx",
        description: "xghxxc",
        image: "../../assets/projects/placeholder1.png",
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "adfgda",
        description: "adgdag",
        image:"../../assets/projects/placeholder1.png",
        githubLink: "adfga",
        deployedLink: "",
      },
      {
        title: "agdffd",
        description: "adfgafg",
        image: "../../assets/projects/placeholder1.png",
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "afgag",
        description: "aagfdga",
        image: "../../assets/projects/placeholder1.png",
        githubLink: "",
        deployedLink: "",
      },
      {
        title: "adgad",
        description: "afdgagf",
        image: "../../assets/projects/placeholder1.png",
        githubLink: "",
        deployedLink: "",
      }
    ];

  return (
      <div className="flex-row">
      {/* <Portfolio Project = {projectContent}/> */}
        {projectContent.map(projects => {
        return (
          <Portfolio
            title={projects.title}
            description={projects.description}
            image={projects.image}
            githubLink={projects.githubLink}
            deployedLink={projects.deployedLink}
            key={projects.title}
        >
            </Portfolio>
        )
        })}
      </div>
  );
}



