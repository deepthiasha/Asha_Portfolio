import allstate from "../assets/projects/allstate.png";
import Pulsora from "../assets/projects/Pulsora.png";
import ecommerce from "../assets/projects/e-commerce.png";
import taskManagement from "../assets/task_management.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting
 robust and scalable web applications. With 7 years of hands-on experience, I have honed my 
 skills in front-end technologies like Javascript , React, Next Js as well as back-end technologies like Node.js,
  MySQL, Nest js , Express Js, and MongoDB. My goal is to leverage my expertise to create innovative 
  solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for
 creating efficient and user-friendly web applications. With 7 years of professional experience, 
 I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, Nest Js, Express Js, 
 and MongoDB. My journey in web development began with a deep curiosity for how things work, 
 and it has evolved into a career where I continuously strive to learn and adapt to new challenges. 
 I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality
  solutions. Outside of coding, I enjoy staying active, exploring new technologies and doing some poc's.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Canada Life",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js.
     Implemented RESTful APIs and integrated with MongoDB databases.
    Collaborated with stakeholders to define project requirements and timelines.Developed a
     RESTful API that allowed for secure and efficient data transfer between the front-end
and back-end systems.Designed efficient database schemas to store data from the web applications.`,
    technologies: [
      "Javascript",
      "React.js",
      "Redux",
      "MongoDB",
      "My Sql",
      "Material UI",
      "Node Js",
      "Nest Js",
      "Express",
    ],
  },
  {
    year: "2021 - 2023",
    role: "Fullsatck Developer",
    company: "Five Data Products and solutions",
    description: `Designed and developed user interfaces for web applications using  and React.
     Worked closely with backend developers to integrate frontend components with Node.js APIs. 
     Implemented responsive designs and optimized frontend performance. Optimized existing web 
     application performance by refactoring code and improving page load times.
     Validated code for proper structuring, security and compatibility with different browsers, devices
or operating systems`,

    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "Redux",
      "MySQL",
      "Azure Function Apps",
      "Express",
    ],
  },
  {
    year: "2018 - 2021",
    role: "Front End Developer",
    company: "IGT Solutions",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. 
    Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional
     teams to deliver high-quality software products on schedule.`,
    technologies: ["React", "Redux Thunk", "Mongo Db", "Express"],
  },
  {
    year: "2017 - 2018",
    role: "Software Engineer",
    company: "Accenture",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["CSS", "HTML", "Javascript", "React"],
  },
];

export const PROJECTS = [
 
  {
    title: "All State",
    image: allstate,
    description: `This project enables allstate's agents to complete insurance transaction behalf of user's depending upon their need.
    I'm involved in working across different products throughout entire SDLC of respective projects.
       Allstate provides insurance for Auto, Renters, Home, Condo, Motorcycle etc.`,
    technologies: [
      "HTML",
      "CSS",
      "Java Script",
      "React",
      "Foundation Components",
      "Redux Thunk",
    ],
    link: "https://www.allstate.com/",
  },
  {
    title: "Pulsora",
    image: Pulsora,
    description: `This project is about development of Pulsora eliminates the administrative burden of ESG reporting and compliance, empowering companies to drive sustainable outcomes with actionable insights.`,
    technologies: [
      "HTML",
      "CSS",
      "React.js",
      "Express",
      "Nest Js",
      "Azure Function Apps",
      "MySQL",
      "Redux - Saga",
    ],
    link: "https://www.pulsora.com/",
  },

  {
    title: "E-Commerce Website",
    image: ecommerce,
    description: `A fully functional e-commerce website with features like Products listing, Shopping cart, Checkout and User authentication
       and Admin Dashboard for managing all the products information and their categories and Orders placed by users.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Node.js",
      "Express JS",
      "MongoDB",
    ],
    link: "https://av-ecommerce-client.onrender.com/",
  },
  
  {
    title: "Task Management App",
    image: taskManagement,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Javascript", "React", "Material UI"],
    link: "https://todo-list-4axj.onrender.com",
  },
];
