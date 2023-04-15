import crypto from "assets/images/portfolio/crypto.png";
import csgo from "assets/images/portfolio/csgo.png";
import wine from "assets/images/portfolio/redwine.jpg";
import unity from "assets/images/portfolio/unity.png";

export const projectsList = [
  {
    id: 1,
    title: "Restaurant Ordering Website",
    logo: crypto,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://github.com/Alicesyn/order-website",
    desc: ``,
    technologies: ["React", "JavaScript", "Express", "Jest", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Augmented Reality Museum",
    link: "https://github.com/Alicesyn/AR-Museum-2",
    logo: unity,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `Created a virtual museum in Unity’s augmented reality, themed under different historical periods
    Utilized Microsoft’s MRTK toolkit to have the app function and deploy on mobile devices and HoloLens`,
    technologies: ["C#", "Unity", "Microsoft MRTK", "Autodesk Maya"]
  },
  {
    id: 3,
    title: "The Final Concerto Game",
    logo: unity,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://github.com/Alicesyn/The-Final-Concerto",
    desc: `Managed a group of 6 to produce original music, art, game mechanics, and level designs, resulting in an ‘A’ for the class after an evaluation from over 20 industry professionals`,
    technologies: ["C#", "Unity", "Photoshop"]
  },
  {
    id: 4,
    title: "CS:GO Text Mod",
    logo: csgo,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://github.com/Alicesyn/CSGO-Text-Mod",
    desc: `Constructed an open-source anti-cheat friendly mod that color-codes and simplifies in-game text`,
    technologies: ["C++"]
  },
  {
    id: 5,
    title: "Cryptocurrency Tracker",
    logo: crypto,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://github.com/Alicesyn/react-crypto-tracker",
    desc: `Displayed real-time top cryptocurrency prices on a responsive site using Coingecko API
      Utilized React Hooks to enable search bar and set coin attributes fetched by Axios
    `,
    technologies: ["React", "JavaScript", "Axios"]
  },
  {
    id: 6,
    title: "Wine Quality Data Analysis",
    logo: wine,
    blurHash: "L09sWSxdH;s?%6axWAfk00V?%jax",
    link: "https://gosavehq.com/",
    desc: `Extracted data from Kaggle to implement predictive models that determine key predictors in quality
      Trained the models on 1200 data points to get the mean testing error below 30% in R
    `,
    technologies: ["R", "Kaggle"]
  }
];
