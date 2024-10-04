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
  // {
  //   id: "RU",
  //   title: "RU",
  // },
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

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

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
];

export { services, technologies, experiences, certifications, projects };