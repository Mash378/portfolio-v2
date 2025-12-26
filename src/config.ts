export const siteConfig = {
  name: "Mashroor Newaz",
  title: "Software Engineer · ML & AI",
  description: "Portfolio website of Mashroor Newaz",
  accentColor: "#1d4ed8",
  social: {
    email: "mashroornewaz37@gmail.com",
    linkedin: "https://www.linkedin.com/in/mashroornewaz/",
    github: "https://github.com/Mash378",
  },
  aboutMe:
    "Hi, I’m Mashroor Newaz, a senior at the University of Florida majoring in Computer Science with a minor in Physics. My interests lie in artificial intelligence and machine learning, algorithms, and software engineering. I’m driven by curiosity—whether it’s understanding complex systems or building tools and programs that bring ideas to life.",
  skills: ["Javascript", "React Native", "Node.js", "Python", "scikit-learn", "Docker"],
  projects: [
    {
      name: "DoorDash Delivery",
      description:
        "Developed and deployed an end-to-end ML pipeline using XGBoost, performing feature engineering, model evaluation with MAE, and serving predictions through a Gradio interface hosted on Hugging Face Spaces.",
      link: "https://huggingface.co/spaces/Mash37/DoorDash_Delivery_time_predictor",
      skills: ["Python", "Feature Engineering & Regression Modeling", "Hugging Face"],
    },
    {
      name: "Reel Rivals",
      description:
        "Cross-platform social media mobile application built with React Native and TypeScript, featuring secure authentication and intuitive UI design.",
      link: "https://github.com/Mash378/Social-Media",
      skills: ["React Native", "JavaScript", "Node.js", "AWS"],
    },
    {
      name: "Peer-to-Peer File Sharing Network",
      description:
        "Built a peer-to-peer file-sharing application in Python, implementing decentralized networking, peer discovery, and direct file exchange without a central server.",
      link: "https://github.com/Mash378/Peer2Peer-Network",
      skills: ["Python", "Distributed System Design", "Network Programming"],
    },
  ],
  experience: [
    {
      company: "Bideshi",
      title: "Software Developer Intern",
      dateRange: "July 2025 - September 2025",
      bullets: [
        "Implemented an email capture system with custom integrations, generating 75 monthly signups and strengthening customer retention",
        "Integrated a product review feature using API integration and template customization, increasing sales by 24%",
        "Implemented Google OAuth for seamless user authentication and faster onboarding",
      ],
    },
    {
      company: "Miami Dade College",
      title: "Research Assistant",
      dateRange: "May 2023 - Oct 2023",
      bullets: [
        "Analyzed 100K+ 311 service request records using statistical analysis and Tableau visualization to identify trends by location, priority, and completion status",
        "Built a classification model (92% accuracy) using regression to predict goal achievement by zip code and issue type",
        "Reduced model overfitting by 20\% through fine-tuning and application of regularization techniques",
      ],
    },
    {
      company: "ACHIEVEMOR",
      title: "Software Engineering Intern",
      dateRange: "May 2023 - Aug 2023",
      bullets: [
        "Automated extraction of data from sport websites using Selenium, reducing manual input by 90%",
        "Designed and populated a SQLite database with 20K+, enabling faster and more efficient data retrieval",
        "Built a Flask backend that reduced page load time by 15% and supported scalability",
        "{Developed a fully functional navigation component that streamlined access to content via JSON API responses",
      ],
    },
  ],
  education: [
    {
      school: "University of Florida",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2024 - 2026",
      achievements: [
        "Dean's List",
        "Wayne H. Chen Memorial Scholar",
      ],
    },
    {
      school: "Miami Dade College",
      degree: "Associate of Arts in Computer Science",
      dateRange: "2022 - 2023",
      achievements: [
        "Graduated Magna Cum Laude with 3.95 GPA",
        "Dean's List all semesters",
        "Participited in NASA Space Apps Challenge 2023",
      ],
    },
  ],
};
