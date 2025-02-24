import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaGlobe } from "react-icons/fa";

// Customize the Social Links
export const personalInfo = {
  name: "Dileep Reddy Kotra",
  role: "Software Tester",
  bio: "Experienced Software Tester with 4+ years of expertise in ensuring the quality and reliability of software applications. Skilled in Selenium with Java, ETL Testing, API Testing, and Test Management Tools.",
  email: "kotradileepreddy@gmail.com",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dileep-reddy-kotra/", icon: FaLinkedin },
    { name: "Twitter", url: "https://x.com/dileep_reddy", icon: FaTwitter },
    { name: "GitHub", url: "https://github.com/DileepReddyKotra", icon: FaGithub }
  ],
  about: "Experienced in Web-Based and Mobile Application Testing (Android/iOS), API Testing, and Automation using Selenium with Java. Strong knowledge in Agile Scrum methodologies, defect management, and test strategy planning."
};

export const experiences = [
  {
    title: "Test Engineer",
    company: "HCL Technologies",
    period: "May 2022 - Present",
    description: "Worked on testing web applications using Selenium with Java, performing functional, integration, and regression testing. Managed test cases in Zephyr, tracked defects, and collaborated in Agile teams. Experienced in Qlik Sense, Cognos Analytics, and Azure GIT."
  },
  {
    title: "Business Process Associate",
    company: "Accenture Solutions",
    period: "Dec 2020 - May 2022",
    description: "Performed end-to-end testing on Uber Eats application, including functional and regression testing on web and mobile platforms. Managed test cases using OCTANE and JIRA, and performed defect triaging and requirement clarifications."
  }
];

export const skills = {
  Technical: [
    { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }, 
     { name: "Selenium with Java", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" },
     { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
     { name: "Zephyr", image: "/zephyr.png" },
     { name: "Azure GIT", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
     { name: "Functional Testing", image: "/functional-testing.png" },
     { name: "ETL Testing", image: "/etl-testing.png" },
     { name: "API Testing", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Postman-logo.png" }
  
     
   
  ],
  // frameworks: [
  //   { name: "Selenium with Java", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png" }
  // ],
  // tools: [
  //   { name: "Jira", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  //   { name: "Zephyr", image: "/zephyr.png" },
  //   { name: "Azure GIT", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
  // ],
  testing: [
    { name: "Functional Testing", image: "/functional-testing.png" },
    { name: "ETL Testing", image: "/etl-testing.png" },
    { name: "API Testing", image: "https://upload.wikimedia.org/wikipedia/commons/9/97/Postman-logo.png" }
  ]
};

export const certifications = [
  { name: "AWS Cloud Practitioner", organization: "AWS" },
  { name: "Azure DP-203 Data Engineering & AZ-900", organization: "Microsoft" },
  { name: "SAG WebMethods Integration Associate", organization: "Software AG" }
];
