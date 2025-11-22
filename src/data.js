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
    title: "Apache StreamPipes",
    description: "Contributed to Apache StreamPipes, a self-service Industrial IoT toolbox enabling non-technical users to connect, analyze, and explore IoT data streams.",
    url: "https://github.com/BudhirajaChinmay/streampipes",
    tags: ["Apache", "IoT", "Java", "Open Source"]
  },
  {
    title: "Smart Transportation System",
    description: "Led team as Team Leader for Smart India Hackathon 2019 Finalist. Built ML-powered web app predicting real-time seat availability in public transport.",
    url: "https://github.com/BudhirajaChinmay/SIH2019-Transport_Problem",
    tags: ["ML", "Leadership", "Hackathon", "Web"]
  },
  {
    title: "ClickHouse DBMS",
    description: "Contributed to ClickHouse, a high-performance analytics database management system designed for big data workloads.",
    url: "https://github.com/BudhirajaChinmay/ClickHouse",
    tags: ["DBMS", "Big Data", "C++", "Open Source"]
  },
  {
    title: "Vanus - Serverless Message Queue",
    description: "Contributed to Vanus, a cloud-native serverless message queue for building event-driven architectures with ease.",
    url: "https://github.com/BudhirajaChinmay/vanus",
    tags: ["Serverless", "Cloud-Native", "Go", "EDA"]
  },
  {
    title: "Geometry Driven Machine Learning",
    description: "Research project evaluating geometric constraints of Deep Neural Networks on Stiefel Manifold, analyzing effects on convergence speed and generalizability.",
    tags: ["ML Research", "PyTorch", "Deep Learning"]
  }
];
