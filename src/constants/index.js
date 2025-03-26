import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer & Mobile Developer",
    company_name: "Vesko Ltd",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "07/2024 – Present",
    points: [
      "Developed Vesko's business site using React, TypeScript, Tailwind CSS, and Vite.",
      "Converted Figma designs into responsive components, ensuring high-quality UI/UX.",
      "Managed GitHub PR merges and performed code reviews to ensure clean code practices.",
      "Developed a React Native mobile app using Expo and optimized performance.",
    ],
  },
  {
    title: "Production Specialist",
    company_name: "Swappie",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "09/2021 – 05/2023",
    points: [
      "Repaired iPhones to high-quality standards in a fast-paced production environment.",
      "Maintained a high speed and accuracy in daily repairs while meeting targets.",
      "Collaborated with team members to improve efficiency and meet deadlines.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abhichhetri09",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhishek-khati-chhetri-a5b380174/",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-orange",
    name: "Java Bank Application",
    description:
      "A simple Bank application for creating an account, depositing money, withdrawing money, and deleting the account.",
    link: "https://github.com/abhichhetri09/Java-Bank_Application",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-purple",
    name: "Guessing Game",
    description: "A fun guessing game application built in Java.",
    link: "https://github.com/abhichhetri09/GuessingGame",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-blue",
    name: "Todo List",
    description: "A simple todo list app to manage tasks.",
    link: "https://github.com/abhichhetri09/todolist",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Recipe Web Application",
    description:
      "A full-stack solution for users to explore, add, and like different recipes. Built with Spring Boot, Thymeleaf, and PostgreSQL.",
    link: "https://github.com/abhichhetri09/RecipeApp",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "Expense Tracker",
    description: "An app to help users track their expenses.",
    link: "https://github.com/abhichhetri09/ExpenseTracker",
  },
];
