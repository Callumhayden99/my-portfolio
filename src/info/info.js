import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock4 from "../img/mock4.png";
import mock3 from "../img/mock3.png";


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Callum",
  lastName: "Hayden",
  initials: "CH", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Junior Full stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the UK/Manchester",
    },
    {
      emoji: "💼",
      text: "Looking for my first software developer job",
    },
    {
      emoji: "📧",
      text: "callum.hayden@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Callum. I'm a junior full stack developer. I've just completed my 6 month bootcamp at Boolean. I'm a hard working individual who wants to learn more. If you hire me, you wont be let down!",
  cv: [
    {
      link: "https://drive.google.com/file/d/1Zmja_SgQqkNEmQcCa3eN4FYZoYeAM45w/view?usp=drive_link",
    },
  ],
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "MongoDB",
      "html5",
      "css3",
    ],
    exposedTo: [
      "nodejs",
      " express",
      "postgresSQL",
      "tailwind",
      "sass",
      "prisma",
    ],
  },
  hobbies: [
    {
      label: "Gaming",
      emoji: "🎮",
    },
    {
      label: "Gym",
      emoji: "🏋️‍♀️",
    },
    {
      label: "Movies",
      emoji: "🎥",
    },
    {
      label: "Cooking",
      emoji: "🌶",
    },
    {
      label: "Reading(espcially all the star wars ones)",
      emoji: "📖",
    },
    {
      label: "Travelling the world",
      emoji: "🌏",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "SKY ESTATE/ FULL STACK",
      live: "https://sky-estate.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        "https://github.com/Callumhayden99/my-hom", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock3,
    },
    {
      title: "LUXURY MOTORS/ FULL STACK",
      live: "https://drive.google.com/file/d/1YWNspl1Rir02RN5jPI7fJUsEraaUfNCO/view?usp=sharing", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        "https://github.com/Callumhayden99/carsite/tree/main/my-react-app", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "STAR WARS/ FRONTEND",
      live: "https://drive.google.com/file/d/1SWGxBSPTCjhJS-6FqLkSUvGmoNne-zl1/view?usp=sharing",
      source: "https://github.com/Callumhayden99/starwars-project",
      image: mock4,
    },
  ],
};
