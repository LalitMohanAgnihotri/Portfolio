import React from "react";
import RestaurantMenu from "../assets/projectImg/Restaurant-Menu.png";
import Todo from "../assets/projectImg/Todo.png";
import Counter from "../assets/projectImg/Counter.png";
import Calculator from "../assets/projectImg/Calculator.png";
import DSA from "../assets/projectImg/DSA.png";
import PostVive from "../assets/projectImg/PostVive.png";
import WeatherApp from "../assets/projectImg/WeatherApp.png";
import UrlShortener from "../assets/projectImg/urlShortner.png";
import CurrencyConverter from "../assets/projectImg/CurrencyConverter.png";
import LostAndfound from "../assets/projectImg/LostAndfound.png";

const projectsList = [
  {
    id: 1,
    title: "Lost & Found Platform",
    description:
      "Production-ready MERN platform for lost and found item reporting, smart item matching, claim verification, real-time notifications, and secure admin moderation with JWT authentication and Redis OTP recovery.",
    imageSrc: LostAndfound,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    extraSkillsCount: 4,
    githubLink:
      "https://github.com/LalitMohanAgnihotri/Lost-And-found_CMPS",
    liveDemoLink: "https://lost-and-found-cmps-jrc1.vercel.app/",
  },

  {
    id: 2,
    title: "DSA Instructor (AI Powered)",
    description:
      "AI-powered DSA learning platform with secure authentication, chat-based problem solving, Gemini AI integration, and persistent conversation history management.",
    imageSrc: DSA,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    extraSkillsCount: 4,
    githubLink: "https://github.com/LalitMohanAgnihotri/DSA-Instructor",
    liveDemoLink: "https://dsa-instructor-8q3k.vercel.app/",
  },

  {
    id: 3,
    title: "Node URL Shortener",
    description:
      "Minimal URL shortener built using pure Node.js with custom aliases, automatic short code generation, and lightweight file-based persistence.",
    imageSrc: UrlShortener,
    skills: ["Node.js", "JavaScript", "REST APIs"],
    extraSkillsCount: 2,
    githubLink: "https://github.com/LalitMohanAgnihotri/url-shortener",
    liveDemoLink: "https://url-shortener-e6h3.onrender.com/",
  },

  {
    id: 4,
    title: "Weather Application",
    description:
      "Real-time weather forecasting application with city-based search, unit conversion, and live weather data integration using OpenWeather API.",
    imageSrc: WeatherApp,
    skills: ["JavaScript", "Node.js", "Express.js"],
    extraSkillsCount: 3,
    githubLink: "https://github.com/LalitMohanAgnihotri/Weather-App",
    liveDemoLink: "https://weather-app-sxbe.vercel.app/",
  },

  {
    id: 5,
    title: "Currency Converter",
    description:
      "Responsive currency converter application with real-time exchange rates and dynamic currency conversion using external APIs.",
    imageSrc: CurrencyConverter,
    skills: ["JavaScript", "Node.js", "Express.js"],
    extraSkillsCount: 3,
    githubLink:
      "https://github.com/LalitMohanAgnihotri/Currency-Converter-Web-Application",
    liveDemoLink:
      "https://currency-converter-web-application-dusky.vercel.app/",
  },

  {
    id: 6,
    title: "React Blog Application",
    description:
      "Modern React-based blogging platform featuring post creation, category organization, and responsive dashboard-style UI.",
    imageSrc: PostVive,
    skills: ["React.js", "JavaScript", "CSS"],
    extraSkillsCount: 1,
    githubLink: "https://github.com/LalitMohanAgnihotri/PostVive",
    liveDemoLink: "",
  },

  {
    id: 7,
    title: "Todo Application",
    description:
      "Task management application with deadline tracking, dynamic task updates, and responsive user interface built using React.",
    imageSrc: Todo,
    skills: ["React.js", "JavaScript", "CSS"],
    extraSkillsCount: 1,
    githubLink:
      "https://github.com/LalitMohanAgnihotri/React-Task-Manager-TaskFlow",
    liveDemoLink:
      "https://taskmanager-ngcvu8t95-lalit-mohan-agnihotris-projects.vercel.app",
  },

  {
    id: 8,
    title: "Counter Application",
    description:
      "State management focused counter application built with React and Redux Toolkit supporting dynamic increment and decrement operations.",
    imageSrc: Counter,
    skills: ["React.js", "Redux Toolkit", "JavaScript"],
    extraSkillsCount: 1,
    githubLink: "https://github.com/LalitMohanAgnihotri/Smart-Counter",
    liveDemoLink:
      "https://smart-counter-corsyt4i8-lalit-mohan-agnihotris-projects.vercel.app",
  },

  {
    id: 9,
    title: "Calculator Application",
    description:
      "Responsive calculator application supporting arithmetic operations, percentage calculations, and clean modern UI interactions.",
    imageSrc: Calculator,
    skills: ["React.js", "JavaScript", "CSS"],
    extraSkillsCount: 1,
    githubLink: "https://github.com/LalitMohanAgnihotri/Calculator",
    liveDemoLink:
      "https://calculator-mnylx1uku-lalit-mohan-agnihotris-projects.vercel.app/",
  },

  {
    id: 10,
    title: "Restaurant Menu Website",
    description:
      "Responsive restaurant menu website with clean UI design and structured menu layout for improved visual presentation.",
    imageSrc: RestaurantMenu,
    skills: ["HTML5", "CSS3"],
    extraSkillsCount: 1,
    githubLink:
      "https://github.com/LalitMohanAgnihotri/lalit-restaurant-menu",
    liveDemoLink: "https://lalit-restaurant-menu.vercel.app",
  },
];
export default projectsList;
