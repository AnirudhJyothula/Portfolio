
import { Code2, Database, Cloud, Globe, Layers, Server, Smartphone, Palette } from 'lucide-react';

export const personalInfo = {
  name: "Anirudh",
  role: "Full Stack Developer",
  bio: "As a full-stack developer with 2 years of experience building end-to-end web applications, user experience is always top of mind when creating scalable and secure applications. I am passionate about writing maintainable code and delivering impactful solutions to real-world challenges. Whether it's designing modern user interfaces, developing secure APIs, or optimizing performance, I enjoy working across the entire development stack to create seamless digital experiences.",
  email: "anirudhjyothula@gmail.com",
  location: "India",
 
};

export const skills = [
  { name: "React",  icon: Code2 },
  { name: "Angular",  icon: Code2 },
  { name: "TypeScript", icon: Code2 },
  { name: "Java",  icon: Code2 },
  { name: "Python",  icon: Code2 },
  { name: "PostgreSQL", icon: Database },
  { name: "AWS",  icon: Cloud }
];

export const projects = [
  {
    id: 1,
    title: "Legal Ai Website",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
    image: import.meta.env.BASE_URL + "legalai.png",
    tech: ["React", "Node.js","Supabase", "PostgreSQL", "Razorpay"],
    liveUrl: "https://legal-web.lovable.app/",
    githubUrl: "https://github.com/Anirudh-98",
    featured: false,
    category: "freelance"
  },
  {
    id: 2,
    title: "RadDeals Website",
    description: "Real-time collaborative task management application with drag-and-drop functionality and team features.",
    image: import.meta.env.BASE_URL + "raddeals.png",
    tech: ["React", "Node.js","Supabase", "PostgreSQL",],
    liveUrl: "https://raddeals.in",
    githubUrl: "https://github.com/Anirudh-98",
    featured: true,
     category: "freelance"
  },
  {
    id: 3,
    title: "E-Commerce Platform ",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment integration, and admin dashboard.",
    image: import.meta.env.BASE_URL + "ecommerce.jpg",
    tech: ["Angular", "Java", "PostgreSQL"],
    liveUrl: "https://github.com/Anirudh-98",
    githubUrl: "https://github.com/Anirudh-98/SecureEcommerce",
    featured: false,
    category: "all"
  },
  {
    id: 4,
    title: "Car Rental Website",
    description: "Custom restaurant booking and management system with real-time availability, customer management, and payment processing.",
    image: import.meta.env.BASE_URL + "carrental.jpg",
    tech: ["React", "Supabase", "PostgreSQL"],
    liveUrl: "https://prakash28113.github.io/car_rental/",
    githubUrl: "https://github.com/Anirudh-98/carrental",
    featured: false,
    category: "freelance"
  }
];

export const experience = [
  // {
  //   title: "Cyber Security Analyst",
  //   company: "Pinnacle Labs",
  //   period: "2025 - Present",
  //   description: "Lead development of web applications using React, Node.js, and cloud technologies."
  // },
  {
    title: "Full Stack Developer",
    company: "Royal Cyber Pvt Ltd",
    period: "2022 - 2022",
    description: "Developed and maintained multiple client projects using modern web technologies."
  },
  {
    title: "Junior Developer",
    company: "Futzen E Technologies Pvt Ltd",
    period: "2021 - 2022",
    description: "Built responsive web applications and collaborated with design teams."
  }
];

export const education = [
  {
    degree: "Master's in Cybersecurity",
    institution: "Coventry University",
    period: "2023 - 2024",
    description: "Specialized in network security, ethical hacking, and digital forensics."
  },
  {
    degree: "Bachelor of Electronics and Communication Engineering",
    institution: "PRIST University",
    period: "2017 - 2021",
    description: "Specialized in software engineering and web technologies."
  }
];

export const certifications = [
  "Certified Ethical Hacker -EC Council",
  "Google Cybersecurity Fundational",
  "ISO/IEC 27001 Information Security Associate",
  "AWS cloud Practitioner Essentials "
];
