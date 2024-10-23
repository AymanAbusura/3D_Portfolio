import { 
    mobile, 
    backend, 
    web,
    shahin, 
    nozzum, 
    leadhunters, 
    coursera, 
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
  } from "../assets";
  
  export const getNavLinks = (t) => [
    {
      id: "about",
      title: t("nav.about"), // Translation Key: nav.about
    },
    {
      id: "work",
      title: t("nav.work"),  // Translation Key: nav.work
    },
    {
      id: "contact",
      title: t("nav.contact"),  // Translation Key: nav.contact
    },
  ];
  
  export const getServices = (t) => [
    {
      title: t("about.services.webDeveloper"), // Translation Key: services.webDeveloper
      icon: web,
    },
    {
      title: t("about.services.reactDeveloper"), // Translation Key: services.reactDeveloper
      icon: backend,
    },
    {
      title: t("about.services.reactNativeDeveloper"), // Translation Key: services.reactNativeDeveloper
      icon: mobile,
    },
    {
      title: t("about.services.backendDeveloper"), // Translation Key: services.backendDeveloper
      icon: backend,
    },
  ];
  
  export const getExperiences = (t) => [
    {
      title: t("experiences.middleWebDeveloper"),
      company_name: "LeadHunters",
      location: "Belgorod, Russia",
      icon: leadhunters,
      iconBg: "#fff",
      date: "Jan 2022 - Present",
      points: [
        t("experiences.leadhunters.point1"),
        t("experiences.leadhunters.point2"),
        t("experiences.leadhunters.point3"),
        t("experiences.leadhunters.point4"),
      ],
    },
    {
      title: t("experiences.javaDeveloper"),
      company_name: "Nozzum for Business Solutions",
      location: "Amman, Jordan",
      icon: nozzum,
      iconBg: "#fff",
      date: "Mar 2020 - Jun 2021",
      points: [
        t("experiences.nozzum.point1"),
        t("experiences.nozzum.point2"),
        t("experiences.nozzum.point3"),
        t("experiences.nozzum.point4"),
      ],
    },
    {
      title: t("experiences.techSupportEngineer"),
      company_name: "Shahin Computer Est.",
      location: "Amman, Jordan",
      icon: shahin,
      iconBg: "#fff",
      date: "Jul 2018 - Jul 2019",
      points: [
        t("experiences.shahin.point1"),
        t("experiences.shahin.point2"),
        t("experiences.shahin.point3"),
      ],
    },
  ];
  
  export const getCertifications = (t) => [
    {
      title: t("certifications.metaFrontEnd"),
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#fff",
      date: "Aug 2023",
      link: import.meta.env.VITE_APP_CERTIFICATION_LINK3,
    },
    {
      title: t("certifications.metaReactNative"),
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#fff",
      date: "Feb 2024",
      link: import.meta.env.VITE_APP_CERTIFICATION_LINK4,
    },
    {
      title: t("certifications.ibmFullStack"),
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#fff",
      date: "Sep 2024",
      link: import.meta.env.VITE_APP_CERTIFICATION_LINK6,
    },
  ];
  
  export const getProjects = (t) => [
    {
      name: "Diagram",
      description: t("projects.diagram.description"),
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "Vite", color: "blue-text-gradient" },
        { name: "appwrite", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
        { name: "shadcn/ui", color: "red-text-gradient" },
        { name: "reactQuery", color: "purple-text-gradient" },
      ],
      image: diagram,
      preview: import.meta.env.VITE_APP_PROJECT_PREVIEW1,
      source_code_link: import.meta.env.VITE_APP_PROJECT_LINK1,
    },
    {
        name: "E-Shop",
        description: t("projects.E-Shop.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "next", color: "green-text-gradient" },
          { name: "stripe", color: "pink-text-gradient" },
          { name: "sanity", color: "purple-text-gradient" },
        ],
        image: ecommerce,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW2,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK3,
      },
      {
        name: "Weather",
        description: t("projects.weather.description"),
        tags: [
          { name: "Next", color: "blue-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
          { name: "shadcn/ui", color: "red-text-gradient" },
        ],
        image: weather,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW7,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK10,
      },
      {
        name: "Apple iPhone15",
        description: t("projects.apple.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "vite", color: "blue-text-gradient" },
          { name: "ThreeJS", color: "red-text-gradient" },
          { name: "GSAP", color: "red-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: apple,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW8,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK11,
      },
      {
        name: "Trendy",
        description: t("projects.trendy.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "Syncfusion", color: "red-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: trendy,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW6,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK9,
      },
      {
        name: "Xora",
        description: t("projects.xora.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "Vite", color: "blue-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
        ],
        image: xora,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW3,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK6,
      },
      {
        name: "Tracker",
        description: t("projects.tracker.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "next", color: "blue-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
          { name: "framer_motion", color: "red-text-gradient" },
        ],
        image: tracker,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW4,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK7,
      },
      {
        name: "Mohanad's Portfolio",
        description: t("projects.portfolio.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "vite", color: "blue-text-gradient" },
          { name: "threejs", color: "blue-text-gradient" },
          { name: "tailwind", color: "pink-text-gradient" },
          { name: "framer_motion", color: "red-text-gradient" },
        ],
        image: moportfolio,
        preview: import.meta.env.VITE_APP_PROJECT_PREVIEW5,
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK8,
      },
      {
        name: "Aora",
        description: t("projects.aora.description"),
        tags: [
          { name: "reactNative", color: "blue-text-gradient" },
          { name: "expo", color: "blue-text-gradient" },
          { name: "appwrite", color: "green-text-gradient" },
          { name: "nativewind", color: "pink-text-gradient" },
          { name: "Animatable", color: "red-text-gradient" },
        ],
        image: aora,
        preview: '',
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK2,
      },
      {
        name: "Fitness",
        description: t("projects.fitness.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "rapidAPI's", color: "green-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
        ],
        image: fitness,
        preview: '',
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK4,
      },
      {
        name: "LeadHunters",
        description: t("projects.leadhunters.description"),
        tags: [
          { name: "react", color: "blue-text-gradient" },
          { name: "css", color: "pink-text-gradient" },
        ],
        image: leadhunter,
        preview: '',
        source_code_link: import.meta.env.VITE_APP_PROJECT_LINK5,
      },
  ];