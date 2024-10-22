import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  nextjs,
  git,
  figma,
  docker,
  shahin,
  bigo,
  nozzum,
  leadhunters,
  coursera,
  // udemy,
  diagram,
  ecommerce,
  fitness,
  aora,
  leadhunter,
  xora,
  tracker,
  moportfolio,
  trendy,
  weather,
  apple,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support Engineer",
    company_name: "Shahin Computer Est.",
    location: "Amman, Jordan",
    icon: shahin,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Jul 2018 - Jul 2019",
    points: [
      "Research and identify solutions to software and hardware issues.",
      "Diagnose and troubleshoot technical issues, including account setup and network configuration.",
      "Follow up with clients to ensure their IT systems are fully functional after troubleshooting.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Nozzum for Business Solutions",
    location: "Amman, Jordan",
    icon: nozzum,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Mar 2020 - Jun 2021",
    points: [
      "Contribute to all stages of software development lifecycl.",
      "Analyze user requirements to define business objectives.",
      "Manage Java and Java EE application development.",
      "Develop documentation to help users.",
    ],
  },
  {
    title: "Content Security Moderator",
    company_name: "BIGO",
    location: "Amman, Jordan",
    icon: bigo,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Jul 2021 - Jan 2022",
    points: [
      "Flexible member working on 4 tasks.",
      "Quickly checking and handling illegal content on the platform.",
      "Collect the illegal key words and add & maintain the regional sensitive vocabulary periodically.",
    ],
  },
  {
    title: "Middle Web Developer",
    company_name: "LeadHunters",
    location: "Belgorod, Russia",
    icon: leadhunters,
    iconBg: "#fff",
    date: "Oct 2022 - Present",
    points: [
      "Set up APIs and ensured the functionality of scripts.",
      "Edited code in Keitaro and managed web projects in Beget.",
      "Collaborated with the team to enhance web applications using HTML, CSS, JS.",
      "Creating and editing landing pages.",
    ],
  },
];

const certifications = [
  // {
  //   title: "SEO 2021: Complete SEO Training + SEO for WordPress Websites",
  //   company_name: "Udemy",
  //   icon: udemy,
  //   // iconBg: "#E6DEDD",
  //   iconBg: "#fff",
  //   date: "Mar 2021",
  //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK1,
  // },
  // {
  //   title: "Team Leadership & Team Management Skills",
  //   company_name: "Udemy",
  //   icon: udemy,
  //   // iconBg: "#E6DEDD",
  //   iconBg: "#fff",
  //   date: "Dec 2021",
  //   link: import.meta.env.VITE_APP_CERTIFICATION_LINK2,
  // },
  {
    title: "Meta Front-End Developer Professional Certificate",
    company_name: "Coursera",
    icon: coursera,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Aug 2023",
    link: import.meta.env.VITE_APP_CERTIFICATION_LINK3,
  },
  {
    title: "Meta React Native Specialization",
    company_name: "Coursera",
    icon: coursera,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Feb 2024",
    link: import.meta.env.VITE_APP_CERTIFICATION_LINK4,
  },
  {
    title: "Agile with Atlassian Jira",
    company_name: "Coursera",
    icon: coursera,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Feb 2024",
    link: import.meta.env.VITE_APP_CERTIFICATION_LINK5,
  },
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    company_name: "Coursera",
    icon: coursera,
    // iconBg: "#E6DEDD",
    iconBg: "#fff",
    date: "Feb 2024",
    link: import.meta.env.VITE_APP_CERTIFICATION_LINK6,
  },
];

const projects = [
  {
    name: "Diagram",
    description: "Social Media App that enable users to create and share content and participate in social networking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "red-text-gradient",
      },
      {
        name: "reactQuery",
        color: "purple-text-gradient",
      },
    ],
    image: diagram,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW1,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK1,
  },
  {
    name: "E-Shop",
    description: "Online shop, browse product catalogs, create wish lists, add items to a cart, and complete purchases. It also provides payment processing, shipping, and order management capabilities.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "purple-text-gradient",
      },
    ],
    image: ecommerce,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW2,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK3,
  },
  {
    name: "Weather",
    description: "Stay informed and prepared with Weather App, your ultimate companion for real-time weather updates and forecasts! Designed with a user-friendly interface.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "red-text-gradient",
      },
    ],
    image: weather,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW7,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK10,
  },
  {
    name: "Apple iPhone15",
    description: "This project focuses on rebuilding the Apple iPhone 15 Pro website by integrating GSAP animations and 3D effects using Three.js. It provides a comprehensive tutorial on creating everything from unique animations to interactive 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "red-text-gradient",
      },
      {
        name: "GSAP",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW8,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK11,
  },
  {
    name: "Trendy",
    description: "Trendy Dashboard for Ecommerce Shop.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: trendy,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW6,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK9,
  },
  {
    name: "Xora",
    description: "XORA AI Video Editor - SaaS Landing Page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: xora,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW3,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK6,
  },
  {
    name: "Tracker",
    description: "Track your progress, motivate your efforts, and celebrate your successes - SaaS Landing Page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer_motion",
        color: "red-text-gradient",
      },
    ],
    image: tracker,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW4,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK7,
  },
  {
    name: "Mohanad's Portfolio",
    description: "A 3D Marketing Portfolio describes Mohanad's expertise as a Marketer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "framer_motion",
        color: "red-text-gradient",
      },
    ],
    image: moportfolio,
    preview: import.meta.env.VITE_APP_PROJECT_PREVIEW5,
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK8,
  },
  {
    name: "Aora",
    description: "Social Media App that enable users to create and share content and participate in social networking.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "Animatable",
        color: "red-text-gradient",
      },
    ],
    image: aora,
    preview: '',
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK2,
  },
  {
    name: "Fitness",
    description: "Fitness app designed to help with exercise, other types of physical training, nutrition and diet, and other ways to get fit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI's",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    preview: '',
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK4,
  },
  {
    name: "LeadHunters",
    description: "Corporate website designed for presenting a LeadHunters company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: leadhunter,
    preview: '',
    source_code_link: import.meta.env.VITE_APP_PROJECT_LINK5,
  },
];

export { services, technologies, experiences, certifications, projects };