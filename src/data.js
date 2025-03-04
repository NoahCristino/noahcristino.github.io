import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faGoodreads,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
const resume = "./resume.pdf";

const profile = {
  name: "Noah Cristino",
  title: "Fullstack Developer",
  bio: "I am a Software Engineer committed to building reliable, scalable, and efficient software.",
  profilePic: "./me.png",
};

const projects = [
  {
    name: "ReadTogether",
    image: "./readtogether.png",
    description:
      "A social eBook platform connecting readers to discuss, share insights, and enhance understanding through community and AI-powered tools.",
    stack: ["React", "Next.js", "Node.js", "AI"],
  },
  {
    name: "Webalyze",
    image: "./webalyze.png",
    description:
      "A visual code analysis tool designed to provide clear insights into codebase structure.",
    stack: ["React", "Node.js", "Chart.js"],
  },
  {
    name: "AIReply",
    image: "./aireply.png",
    description:
      "An AI-driven tool that generates intelligent email replies, streamlining communication.",
    stack: ["React", "Flask", "AI"],
  },
  {
    name: "SmileDetector",
    image: "./smiledetector.png",
    description:
      "A high-speed, accurate machine learning model that detects smiles in images and videos.",
    stack: ["Python", "TensorFlow", "OpenCV"],
  },
];

const jobs = [
  {
    title: "Systems Engineer",
    company: "Blue Mantis",
    startDate: "Sep 2023",
    endDate: "Aug 2024",
    description:
      "I worked on cloud migration and automation, using AWS and Azure.",
    stack: ["AWS", "Azure"],
  },
  {
    title: "Fullstack Developer",
    company: "The BRIDGE",
    startDate: "Jan 2023",
    endDate: "Apr 2023",
    description:
      "I worked on the SDDH Data Hub project, using React and Node.js.",
    stack: ["React", "Node.js", "JavaScript", "Docker", "Express"],
  },
];

const education = {
  school: "University of Toronto",
  major: "Bachelors of Science in Computer Science",
  specialization: "Specialization in Software Engineering",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Utoronto_coa.svg/640px-Utoronto_coa.svg.png",
};

const socialIcons = [
  {
    icon: faEnvelope,
    link: "mailto:noah@noahcristino.com",
  },
  {
    icon: faGithub,
    link: "https://github.com/NoahCristino",
  },
  {
    icon: faLinkedinIn,
    link: "https://linkedin.com/in/noahcristino",
  },
  {
    icon: faDiscord,
    link: "https://discord.com/users/crrrssssss",
  },
  {
    icon: faGoodreads,
    link: "https://goodreads.com/user/show/179282883",
  },
];

export { resume, profile, projects, jobs, education, socialIcons };
