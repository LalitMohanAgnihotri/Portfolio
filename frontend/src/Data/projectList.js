import React from "react";
import RestaurantMenu from "../assets/projectImg/Restaurant-Menu.png";
import Todo from "../assets/projectImg/Todo.png";
import Counter from "../assets/projectImg/counter.png";
import Calculator from "../assets/projectImg/Calculator.png";
import DSA from "../assets/projectImg/DSA.png";
import PostVive from "../assets/projectImg/PostVive.png";
import Weather from "../assets/projectImg/WeatherApp.png";
import UrlShortener from "../assets/projectImg/urlShortner.png";
import CurrencyConverter from "../assets/projectImg/CurrencyConverter.png";

const projectsList = [
  {
    id: 1,
    title: "DSA Instructor (AI Powered)",
    description:
      "AI-powered DSA instructor with a clean chat UI, secure Express backend, and Gemini AI integration. Frontend deployed on Vercel, backend on Render with environment variables secured.",
    imageSrc: DSA,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Node.js",
      "Express",
      "REST API",
      "AI",
    ],
    extraSkillsCount: 2,
    githubLink: "https://github.com/LalitMohanAgnihotri/DSA-Instructor",
    liveDemoLink: "https://dsa-instructor-8q3k.vercel.app/",
  },

  {
    id: 2,
    title: "Node URL Shortener",
    description:
      "A minimal URL shortener built using pure Node.js without any frameworks, supporting custom aliases, automatic short code generation, and file-based persistence.",
    imageSrc: UrlShortener,
    skills: ["Node.js", "JavaScript", "HTTP Module", "File System", "REST API"],
    extraSkillsCount: 2,
    githubLink: "https://github.com/LalitMohanAgnihotri/url-shortener",
    liveDemoLink: "https://url-shortener-e6h3.onrender.com/",
  },

  {
    id: 3,
    title: "Weather Application",
    description:
      "Real-time weather application with city search, unit toggle, and detailed forecasts built using Node.js, Express, and OpenWeather API.",
    imageSrc: Weather,
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "REST API"],
    extraSkillsCount: 2,
    githubLink: "https://github.com/LalitMohanAgnihotri/Weather-App",
    liveDemoLink: "https://weather-app-sxbe.vercel.app/",
  },
  {
    id: 4,
    title: "Currency Converter Web Application",
    description:
      "Currency converter built with Node.js and Express, offering real-time exchange rates through a REST API and a responsive frontend.",
    imageSrc: CurrencyConverter,
    skills: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "REST API"],
    extraSkillsCount: 1,
    githubLink:"https://github.com/LalitMohanAgnihotri/Currency-Converter-Web-Application",
    liveDemoLink: "https://currency-converter-web-application-dusky.vercel.app/",
  },

  {
    id: 5,
    title: "React Blog Application",
    description:
      "A React-based blog application with post creation, tag categorization, and a clean dashboard-style user interface.",
    imageSrc: PostVive,
    skills: ["React.js", "JavaScript", "CSS", "HTML"],
    extraSkillsCount: 0,
    githubLink: "https://github.com/LalitMohanAgnihotri/PostVive",
    liveDemoLink: "",
  },

  {
    id: 6,
    title: "Todo Application",
    description:
      "A simple and efficient Todo application built using React and CSS. Users can add tasks, set deadlines, and manage daily activities easily.",
    imageSrc: Todo,
    skills: ["React.js", "JavaScript", "CSS", "HTML"],
    extraSkillsCount: 0,
    githubLink:
      "https://github.com/LalitMohanAgnihotri/React-Task-Manager-TaskFlow",
    liveDemoLink:
      "https://taskmanager-ngcvu8t95-lalit-mohan-agnihotris-projects.vercel.app",
  },

  {
    id: 7,
    title: "Counter Application",
    description:
      "A counter application built with React and Redux Toolkit. It supports increment, decrement, custom value operations, and state management using Redux.",
    imageSrc: Counter,
    skills: ["React.js", "Redux Toolkit", "JavaScript", "CSS"],
    extraSkillsCount: 0,
    githubLink: "https://github.com/LalitMohanAgnihotri/Smart-Counter",
    liveDemoLink:
      "https://smart-counter-corsyt4i8-lalit-mohan-agnihotris-projects.vercel.app",
  },

  {
    id: 8,
    title: "Calculator Application",
    description:
      "A modern calculator built with React and CSS, supporting basic arithmetic operations, percentage calculation, and clear functionality with a clean UI.",
    imageSrc: Calculator,
    skills: ["React.js", "JavaScript", "CSS", "HTML"],
    extraSkillsCount: 0,
    githubLink: "https://github.com/LalitMohanAgnihotri/Calculator",
    liveDemoLink:
      "https://calculator-mnylx1uku-lalit-mohan-agnihotris-projects.vercel.app/",
  },

  {
    id: 9,
    title: "Restaurant Menu Website",
    description:
      "A responsive and visually appealing restaurant menu website with a clean and modern layout.",
    imageSrc: RestaurantMenu,
    skills: ["HTML5", "CSS"],
    extraSkillsCount: 1,
    githubLink: "https://github.com/LalitMohanAgnihotri/lalit-restaurant-menu",
    liveDemoLink: "https://lalit-restaurant-menu.vercel.app",
  },
];

export default projectsList;
