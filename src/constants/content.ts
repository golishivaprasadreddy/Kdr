import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaDiscord, FaGlobe ,FaEnvelope, FaWhatsapp} from "react-icons/fa";

// Customize the Social Links
export const personalInfo = {
  name: "Dileep Reddy Kotra",
  role: "Software Tester",
  bio: "Experienced Software Tester with 4+ years of expertise in ensuring the quality and reliability of software applications. Skilled in Selenium with Java, ETL Testing, API Testing, and Test Management Tools.",
  email: "kotradileepreddy@gmail.com",
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dileep-reddy-kotra-042a461bb/", icon: FaLinkedin },
    { name: "Email", url: "mailto:kotradileepreddy@gmail.com", icon: FaEnvelope },
    { name: "WhatsApp", url: "https://wa.me/918897808686", icon: FaWhatsapp }
  ],
  about: "Experienced in Web-Based and Mobile Application Testing (Android/iOS), API Testing, and Automation using Selenium with Java. Strong expertise in Agile Scrum methodologies, defect management, and test strategy planning. Adept at analyzing software performance, identifying bottlenecks, and ensuring seamless user experiences through rigorous quality assurance. Skilled in working with cross-functional teams to drive efficiency and deliver high-quality software solutions."
};

export const experiences = [
  {
    title: "Test Engineer",
    company: "HCL Technologies",
    period: "May 2022 - Present",
    description: "Worked on testing web applications using Selenium with Java, performing functional, integration, and regression testing. Managed test cases in Zephyr, tracked defects, and collaborated in Agile teams. Experienced in Qlik Sense, Cognos Analytics, and Azure GIT.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/HCLTech_logo.svg"
  },
  {
    title: "Business Process Associate",
    company: "Accenture Solutions",
    period: "Dec 2020 - May 2022",
    description: "Performed end-to-end testing on Uber Eats application, including functional and regression testing on web and mobile platforms. Managed test cases using OCTANE and JIRA, and performed defect triaging and requirement clarifications.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Accenture.svg"
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
  SoftSkills: [
    { name: "Communication", image: "https://cdn-icons-png.flaticon.com/512/1053/1053244.png" },
    { name: "Leadership", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { name: "Teamwork", image: "https://cdn-icons-png.flaticon.com/512/2815/2815428.png" },
    { name: "Problem Solving", image: "https://cdn-icons-png.flaticon.com/512/1596/1596815.png" },
    { name: "Time Management", image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png" },
    { name: "Adaptability", image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }
  ]
};

export const certifications = [
  {
    name: "AWS Cloud Practitioner",
    organization: "AWS",
    image: "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  },
  {
    name: "Azure Data Engineer Associate (DP-203)",
    organization: "Microsoft",
    image: "https://tse4.mm.bing.net/th?id=OIP.h4Uzk9fiRC7wa3RmFUdsmQHaEK&pid=Api&P=0&h=180"
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    organization: "Microsoft",
    image: "https://k21academy.com/wp-content/uploads/2020/02/Azure.Fundamental_Icon.png"
  },
  {
    name: "webMethods Integration Associate",
    organization: "Software AG",
    image: "https://images.credly.com/images/1575b5e1-4d90-4427-8073-4f0f9affe758/twitter_thumb_201604_SAG_wM_Integration_Associate_Certification_Apr21.png"
  }
];


export const projects = [
  {
    title: "Test Automation Dashboard",
    description: "A dashboard for monitoring automated test execution results in real time.",
    image: "/test-dashboard.png",
    tags: ["React", "Node.js", "Selenium", "Jira API"],
    links: {
      github: "https://github.com/DileepReddyKotra/test-automation-dashboard",
      live: "https://automation-dashboard.com"
    }
  },
  {
    title: "API Testing Framework",
    description: "A robust API testing framework using Postman and Newman for CI/CD integration.",
    image: "/api-testing.png",
    tags: ["Postman", "Newman", "CI/CD", "Jenkins"],
    links: {
      github: "https://github.com/DileepReddyKotra/api-testing-framework"
    }
  }
];
