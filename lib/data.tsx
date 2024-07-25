import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import freightHub from "@/public/freightHub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "Univeristy of Management and Technology",
    description:
      "I am a passionate student of BSCS with lean towards CyberSecurity.",
    icon: <LuGraduationCap />,
    date: "2024-present",
  },
  {
    title: "Creative StoryBoard Writer",
    location: "Fiverr",
    description:
      "I worked as a story board writer for 6 months where i learn about creative and eye catching animations for instagram reels.",
    icon: <CgWorkAlt />,
    date: "2023-2024",
  },
  {
    title: "Website Developer",
    location: "Fiverr",
    description:
      "I'm now a website developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: <FaReact />,
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Freight Hub",
    description:
      "A website for a trucking agency with multiple pages beautiful custom sliders and contact form.",
    tags: ["React", "Next.js", "Resend", "Tailwind", "Framer", "Vercel"],
    imageUrl: freightHub,
  },
  {
    title: "CorpComment",
    description:
      "Users can give public feedback to companies. I created full-stack web application including front-end and back-end.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I developed the back-end of this application. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "MS SQL",
  "Express",
  "Python",
  "Framer Motion",
] as const;
