import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const profile = {
  name: "Chinmay Budhiraja",
  role: "Software Engineer",
  location: "Bengaluru, India",
  email: "chinmay.k.budhiraja@gmail.com",
  phone: "+91 97114-75185",
  social: [
    { name: "LinkedIn", url: "https://linkedin.com/in/chinmay-budhiraja", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/BudhirajaChinmay", icon: FaGithub },
    { name: "Email", url: "mailto:chinmay.k.budhiraja@gmail.com", icon: FaEnvelope },
  ],
  about: "I'm a Software Engineer with expertise in building scalable systems, cloud infrastructure, and AI-powered solutions. I focus on optimizing costs and performance for high-volume applications."
};

export const experience = [
  {
    company: "Auxia",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Jun 2024 – Present",
    description: [
      "Achieved 25% cost reduction and 69% capacity scale-up through infrastructure optimization and Bigtable redesign.",
      "Led end-to-end design of production-grade AI Agent System (Router, Analyst, Visualization).",
      "Executed Bigtable migration achieving 75% size reduction for serving traffic.",
      "Streamlined ML model retraining pipelines, reducing cycle time by 50%."
    ]
  },
  {
    company: "Media.net",
    role: "Software Engineer",
    location: "Bangalore",
    period: "Apr 2022 – Jun 2024",
    description: [
      "Scaled ad assessment product from 300k to 500k ads/day while reducing costs by ~47%.",
      "Integrated Open Source ML solutions, achieving 1s latency (95th percentile) with 100% recall.",
      "Implemented observability with Prometheus and Grafana."
    ]
  },
  {
    company: "INDMoney",
    role: "Software Engineer",
    location: "Gurugram",
    period: "May 2021 – Mar 2022",
    description: [
      "Developed Order Management System for Insurance products.",
      "Revamped lead generation tracking system."
    ]
  }
];

export const education = {
  institution: "Indraprastha Institute of Information Technology, Delhi",
  degree: "B.Tech Computer Science and Applied Mathematics (Honors)",
  period: "Aug 2017 – Jun 2021",
  gpa: "8.65"
};

export const skills = [
  "Java", "Kotlin", "Bigtable", "BigQuery", "Dataflow", "Kafka", "Redis", "PostgreSQL",
  "LangGraph", "Gemini Models", "OpenAI Models", "Kubernetes", "React", "System Design"
];

export const projects = [
  {
    title: "Geometry Driven Machine Learning",
    description: "Evaluated geometric constraints in Deep Neural Networks on Stiefel Manifold.",
    tags: ["ML", "Research"]
  },
  {
    title: "Smart Transportation System",
    description: "Web app predicting real-time seat availability in public transport using ML. SIH 2019 Finalist.",
    tags: ["ML", "Web", "Hackathon"]
  },
  {
    title: "Database Design - Airlines",
    description: "Comprehensive airline database with Java-based desktop application.",
    tags: ["Java", "SQL", "Database"]
  },
  {
    title: "ClickHouse",
    description: "Contribution/Fork of the free analytics DBMS for big data.",
    url: "https://github.com/BudhirajaChinmay/ClickHouse",
    tags: ["DBMS", "Big Data"]
  },
  {
    title: "Vanus",
    description: "Cloud-native, Serverless message queue for building EDA applications.",
    url: "https://github.com/BudhirajaChinmay/vanus",
    tags: ["Serverless", "Cloud-Native"]
  }
];
