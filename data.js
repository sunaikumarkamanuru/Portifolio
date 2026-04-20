// ============================================================
//  PORTFOLIO DATA FILE — Edit ONLY this file to update your site
//  After editing, just refresh the browser — no other file needs changing.
// ============================================================

const portfolioData = {

  // ─── PERSONAL / HEADER ────────────────────────────────────
  personal: {
    name: "Sunai Kumar Kamanuru",
    typingStrings: ["Coder", "Developer", "AI Enthusiast"],
    // Profile photo (relative to project root)
    photo: "assets/img/sk_photo.jpg",
    favicon: "/favicon.png",
    bio: "A student passionate about technology, design, coding. I'm currently pursuing Computer Science at SRM university and love exploring new skills and working on exciting projects.",
  },

  // ─── ABOUT ────────────────────────────────────────────────
  about: {
    // birthday: "30 May 2005",
    // phone: "+91-9347732774",
    city: "Chennai, India",
    email: "kamanurusunaikumar@gmail.com",
  },

  // ─── SOCIAL LINKS (header + contact box) ───────────────────
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/sunai-kumar-kamanuru-0896b427b",
    github: "https://github.com/sunaikumarkamanuru",
    email: "kamanurusunaikumar@gmail.com",
  },

  // ─── INTERESTS ────────────────────────────────────────────
  interests: [
    { icon: "ri-global-line", color: "#ffbb2c", title: "Software Development" },
    { icon: "ri-camera-3-line", color: "#e80368", title: "Computer Vision" },
    { icon: "ri-english-input", color: "#1c7d32", title: "Natural Language Processing" },
    { icon: "ri-code-s-slash-fill", color: "#28a745", title: "Software Engineering" },
    { icon: "ri-bar-chart-box-line", color: "#f1081f", title: "Visualization" },
    { icon: "ri-file-list-3-line", color: "#47aeff", title: "Algorithms" },
  ],

  // ─── EDUCATION ────────────────────────────────────────────
  education: [
    {
      logo: "assets/img/education/srm.jpg",
      degree: "B.Tech. in Computer Science and Engineering (Current CGPA: 9.21)",
      duration: "August 2023 - Present",
      coursework: [],          // Add strings here if you want to list coursework
    },
    {
      logo: "assets/img/education/accord_school.png",
      degree: "Intermediate Education",
      duration: "September 2021 - March 2023",
      coursework: [],
    },
  ],

  // ─── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    {
      image: "assets/img/certification/python.jpg",
      title: "Database Management System (Elite Certification)",
      issuer: "NPTEL / Swayam",
      link: "#",
    },
    {
      image: "assets/img/certification/C++.JPG",
      title: "Introduction to Machine Learning",
      issuer: "NPTEL / Swayam",
      link: "#",
    },
  ],

  // ─── EXPERIENCE ───────────────────────────────────────────
  experience: {
    seekingMessage: "Currently seeking internship / full-time opportunities. Open to collaborating on impactful projects.",
    hackathons: [
      {
        title: "Gen AI Exchange Hackathon (Hack2skill)",
        link: "#",
        date: "Oct 2025",
        subtitle: "",
        bullets: [
          "Developed AI-powered solutions to address real-world challenges in generative AI within a high-pressure timeframe.",
          "Collaborated with peers to implement innovative LLM-based features and mental health tech integrations.",
        ],
      },
      {
        title: "Smart India Hackathon (Internal)",
        link: "#",
        date: "Sept 2025",
        subtitle: "University Level",
        bullets: [
          "Proposed a Smart Classroom Timetable system using constraint-satisfaction logic to automate university schedules.",
          "Designed system architecture to resolve conflicts between faculty availability and classroom infrastructure.",
        ],
      },
    ],
  },

  // ─── PROJECTS ─────────────────────────────────────────────
  //  filter values : "filter-fullstack", "filter-ml", "filter-mini"
  projects: [
    {
      title: "Mental Wellness Recommendation System",
      image: "assets/img/project/recommender.jpg",
      detailPage: "projects/mental_wellness.html",
      filter: "filter-fullstack",
    },
    {
      title: "Hospital Management System",
      image: "assets/img/project/resume.jpg",
      detailPage: "projects/hospital.html",
      filter: "filter-fullstack",
    },
    {
      title: "IPL Win Predictor",
      image: "assets/img/project/ml.jpg",
      detailPage: "projects/ipl.html",
      filter: "filter-ml",
    },
    {
      title: "Stroke Detection System",
      image: "assets/img/project/ml.jpg",
      detailPage: "projects/stroke_detection.html",
      filter: "filter-ml",
    },
    {
      title: "Epileptic Seizure Detection",
      image: "assets/img/project/ml.jpg",
      detailPage: "projects/epileptic_seizure.html",
      filter: "filter-ml",
    },
    {
      title: "Loan Prediction System",
      image: "assets/img/project/ml.jpg",
      detailPage: "projects/loan_prediction.html",
      filter: "filter-ml",
    },
    {
      title: "Mini Search Engine",
      image: "assets/img/project/gan.jpg",
      detailPage: "projects/mini_search.html",
      filter: "filter-mini",
    },
  ],

  // ─── PROJECT FILTER TABS ──────────────────────────────────
  projectFilters: [
    { label: "All", filter: "*" },
    { label: "Full Stack Projects", filter: ".filter-fullstack" },
    { label: "ML Projects", filter: ".filter-ml" },
    { label: "Mini Projects", filter: ".filter-mini" },
  ],

  // ─── SKILLS ───────────────────────────────────────────────
  skills: [
    { category: "Languages", items: "Python, C++, Java, JavaScript, SQL, HTML/CSS" },
    { category: "Frameworks", items: "Spring Boot, Flask, FastAPI, Maven, Scikit-learn, Pandas" },
    { category: "Developer Tools", items: "Git/GitHub, Docker, Postman, Render, IntelliJ, VS Code" },
    { category: "Databases", items: "MySQL, PostgreSQL, Firebase" },
    { category: "Core CS", items: "Data Structures & Algorithms, DBMS, RESTful APIs, Operating Systems, Computer Networks, JWT Auth" },
    { category: "Soft Skills", items: "Analytical Problem Solving, Agile Collaboration, Technical Documentation" },
  ],

  // ─── RESUME & LINKS ──────────────────────────────────────
  links: [
    {
      icon: "icofont-page",
      title: "Resume",
      url: "https://drive.google.com/file/d/1qh0wh1bduwFVo9R5DKW9WoECWIelCymv/view?usp=drive_link",
      description: "The link contains downloadable resume",
    },
    {
      icon: "icofont-link",
      title: "LeetCode Repository",
      url: "https://github.com/rajaprerak/LeetCode_Problems",
      description: "The github repository contains leetcode problems solution in python.",
    },
  ],

  // ─── CONTACT ──────────────────────────────────────────────
  contact: {
    address: {
      line1: "SRM University",
      line2: "Ramapuram",
      line3: "Chennai, 600089",
    },
    emails: [
      "kamanurusunaikumar@gmail.com",
      // "sb8470@srmist.edu.in",
    ],
    // Social links in the contact box (can differ from header)
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/sunai-kumar-kamanuru-0896b427b",
      github: "https://github.com/sunaikumarkamanuru",
      email: "kamanurusunaikumar@gmail.com",
    },
  },

  // ─── SEO / META ───────────────────────────────────────────
  seo: {
    title: "Sunai Kumar Kamanuru — Portfolio",
    description: "Personal portfolio of Sunai Kumar Kamanuru — developer, coder, and AI enthusiast.",
    keywords: "Sunai Kumar, portfolio, developer, AI, machine learning, full stack",
  },
};
