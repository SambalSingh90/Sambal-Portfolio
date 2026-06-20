// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import aws from './assets/tech_logo/aws.png';
import dockerLogo from './assets/tech_logo/docker.png';
import jenkinsLogo from './assets/tech_logo/jenkins.png';
import linuxLogo from './assets/tech_logo/linux.png';
import networkingLogo from './assets/tech_logo/networking.png';
import grafanaLogo from './assets/tech_logo/grafana.png'
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import techaultemLogo from './assets/company_logo/techaultem_logo.png';
import bharathLogo from './assets/company_logo/bharath_logo.png'
import chetuLogo from './assets/company_logo/chetu_logo.png'

// Education Section Logo's
import srmLogo from './assets/education_logo/srm.png';
import skd1Logo from './assets/education_logo/skd1.png';

// Project Section Logo's
import housingLogo from './assets/work_logo/Housing.png';
import imgremoverLogo from './assets/work_logo/remover.png';
import imgsearchLogo from './assets/work_logo/searchimg.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
   title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Aws Services', logo: aws },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Jenkins', logo: jenkinsLogo },
      { name: 'Linux', logo: linuxLogo },
      { name: 'Networking', logo: networkingLogo },
      { name: 'Github', logo: githubLogo },
      { name: 'Grafana', logo: grafanaLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: techaultemLogo,
      role: "Frontend Trainee",
      company: "TechAultem",
      date: "April 2026 - Present",
      desc: "Frontend Developer Trainee passionate about building modern, responsive, and user-centric web applications. Proficient in React.js, JavaScript, HTML5, CSS3, and Tailwind CSS, with hands-on experience in developing reusable components, integrating APIs, optimizing application performance, and creating intuitive user interfaces. Strong problem-solving abilities with a focus on writing clean, maintainable code and delivering seamless user experiences",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Redux",
        " Next Js",
        "Figma",
      ],
    },
    {
      id: 1,
      img: bharathLogo,
      role: "Cloud Success Engineer",
      company: "Bharath Cloud ",
      date: "Jan 2025 - March 2026",
      desc: "Cloud Success Engineer with expertise in cloud support, technical troubleshooting, and application support. Experienced in collaborating with cross-functional teams, resolving customer issues, and contributing to frontend development using React.js, JavaScript, HTML, CSS, and Tailwind CSS. Strong background in incident management, debugging, deployment validation, and ensuring seamless user experiences",
      skills: [
        "Cloud Support",
        "Technical Support",
        "Ticket Management",
        "Incident Management",
        "Troubleshooting",
        "Linux",
        "Networking",
        "SLA Management",
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
      ],
    },
    {
      id: 2,
      img: chetuLogo,
      role: "Frontend Intern",
      company: "Chetu Pvt Ltd",
      date: "Nov 2023 - Oct 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: srmLogo,
      school: "SRMCEM, Lucnow",
      date: "Apr 2019 - July 2023",
      grade: "7.8 CGPA",
      desc: "I completed my Bachelor's degree (B.Tech) in Information Technology from SRMCEM (Shri Ramswaroop Memorial College of Engineering and Management), Lucknow. During my academic journey, I developed a strong foundation in programming, software development, database management, networking, and core computer science concepts. I studied subjects such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Web Technologies, and Software Engineering. I also worked on academic and personal projects that enhanced my problem-solving, technical, and analytical skills. My experience at SRMCEM played a significant role in building my technical expertise and preparing me for a career in the IT industry.",
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
    },
    {
      id: 1,
      img: skd1Logo,
      school: "S.K.D Academy inter college, Lucknow",
      date: "Apr 2017 - Mar 2018",
      grade: "86%",
      desc: "I completed my class 12 education from S.K.D Academy inter college, Lucknow, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "UP Board(XII), Science with Computer Application",
    },
    {
      id: 2,
      img: skd1Logo,
      school: "S.K.D Academy inter college, Lucknow",
      date: "Apr 2015 - March 2016",
      grade: "83%",
      desc: "I completed my Class 10 education from S.K.D Academy inter college, Lucknow, under the UP board, where I built a strong academic foundation in Mathematics, Science, English, and Social Studies.",
      degree: "UP Board(X), Science with Computer Application",
    },

  ];
  
  export const projects = [
    {
      id: 0,
      title: "House Interior Design",
      description:
        "Built a fully responsive interior design web application that presents modern home décor inspirations, furniture collections, and room layouts. Implemented reusable React components, responsive layouts, and intuitive navigation to enhance user experience across multiple devices.",
      image: housingLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/SambalSingh90/HOUSE-INTERIOR-DESIGN.git",
      webapp: "https://sambalsingh90.github.io/HOUSE-INTERIOR-DESIGN/",
    },
    {
      id: 1,
      title: "Background Image Remover",
      description:
        "Built a responsive image processing application that allows users to upload images and automatically remove backgrounds using API integration. Designed an intuitive user interface with React.js, ensuring smooth performance, efficient image handling, and an enhanced user experience across devices",
      image: imgremoverLogo,
      tags: ["React JS","HTML", "CSS", "JavaScript","API"],
      github: "https://github.com/SambalSingh90/Backgroud-img-Remover.git",
      webapp: "https://sambalsingh90.github.io/Backgroud-img-Remover/",
    },
    {
      id: 2,
      title: "Image Search Application",
      description:
        "Built a dynamic web application that enables users to search and view images in real time through API integration. Implemented responsive UI components, efficient state management, and optimized user interactions to provide a fast and engaging browsing experience.",
      image: imgsearchLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/SambalSingh90/Image-Search-App.git",
      webapp: "https://sambalsingh90.github.io/Image-Search-App/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingm/email-validator",
      webapp: "https://www.npmjs.com/package/cmtkmailvalidator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjneci",
    },
    
    
  ];  