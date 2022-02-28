import  React from "react";
import Portfolio from "./Project";

export default function Projects() {
    const projectContent= [
      {
        title: "RenDATEvous",
        description: "As the Love Guru Team we take love extremely seriously. Have you and your partner constantly fought about what to do, when you finally get your sacred Date Night? Well fight no more with our amazing RenDATEvous application! Randomly find amazing dates or select them from one of our numerous exciting categories. Love the date? Save it to your profile for later reference! Enjoy LOVE.",
        image: require('../../assets/projectPhoto/renDATEvous.png'),
        githubLink: "https://github.com/Blitman12/ren-date-vous",
        deployedLink: "https://rendatevous.herokuapp.com/",
      },
      {
        title: "Baby Aid",
        description: "Baby Aid was created to allow parents with children newly born to 18, be able to have a safe environment to ask questions and receive answers from other experienced parents. Not everyone has a support system around them that allows for the ability to get help if needed. In order to use the site you must create an account. Once created you are then able to post questions and respond with answers to other parents questions. You are also able to vote on both the question and answer, which allows users to know which questions are the most common and which answers are the best solutions to the questions.",
        image: require('../../assets/projectPhoto/babyaid.png'),
        githubLink: "https://github.com/jenmlucas/Baby-Aid",
        deployedLink: "https://babyaid.herokuapp.com/",
      },
      {
        title: "Work Day Scheduler",
        description: " Created an interactive calender where you can not only save notes to localStorage, but also is able to tell you the current time, past time and future times, based on the color of the text's body. Made the code easier to read by using some shorthand syntax. • Used the moment() function in order to display the current date at the top of the page.",
        image: require('../../assets/projectPhoto/scheduler.png'),
        githubLink: "https://github.com/jenmlucas/Work-Day-Scheduler",
        deployedLink: "https://jenmlucas.github.io/Work-Day-Scheduler/",
      },
      {
        title: "Weather Dashboard",
        description: "Created an interactive weather dashboard where you can enter a city name and get the current weather display plus an additional 5 day forecast. All searches also saved in localStorage. UV index presented with a color that indicates whether the conditions are favorable, moderate, or severe. • Made the code easier to read by using some shorthand syntax.",
        image: require('../../assets/projectPhoto/weather.png'),
        githubLink: "https://github.com/jenmlucas/weather-dashboard",
        deployedLink: "https://jenmlucas.github.io/weather-dashboard/",
      },
      {
        title: "Password Generator",
        description: "Created a password generator that provides prompts that inform the user of the password criteria. Made the code easier to read by using some shorthand syntax. Randomized the password using recursive functions and array loops.",
        image: require('../../assets/projectPhoto/password.png'),
        githubLink: "https://github.com/jenmlucas/Password-Generator",
        deployedLink: "https://jenmlucas.github.io/Password-Generator/",
      },
      {
        title: "Wander",
        description: "Created an interactive site that allows you to search for National parks and your local weather. Search results saved in local storage allowing for the user to repeatedly use the app without having to research for data. IP address api used to automatically pull your local weather report. Weather forecast is made more user friendly by making the UV index color coded based on the weather conditions such as, favorable, moderate, and severe. Total of 3 api's used. Created navagation bars to make it easier on the user to jump down to the section they prefer. Weather or park search.",
        image: require('../../assets/projectPhoto/wander.png'),
        githubLink: "https://github.com/jenmlucas/parks-and-rec",
        deployedLink: "https://jenmlucas.github.io/parks-and-rec/",
      },
      {
        title: "Budget Tracker",
        description: "This PWA allows users to track their monthly expenses both on and offline. For convience the user can download the application to their desktop. Users will be able to added expensions to their tracker with no internet connection due to indexedDB caching the post and saving it until the connection is restored.",
        image: require('../../assets/projectPhoto/budgetTracker.png'),
        githubLink: "https://github.com/jenmlucas/budget-tracker",
        deployedLink: "https://bootcampt-budget-tracker-2021.herokuapp.com/",
      }
    ];

  return (
      <div>
      <Portfolio project = {projectContent}/>
      </div>
  );
}



