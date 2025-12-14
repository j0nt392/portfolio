export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  imageUrl?: string; // We'll use placeholders or colors for now
  videoUrl?: string; // Added videoUrl
  githubUrl?: string;
  demoUrl?: string;
  date: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const BIO = {
  name: "Jonatan",
  role: "Software Developer",
  tagline: "Fullstack | AI | React | Python | FastAPI",
  about: `I'm a passionate software developer with a strong foundation in both fullstack web development and Artificial Intelligence. 
  Currently working at Sigma Connectivity in Stockholm. My journey began with hobby programming and freelance work, leading to formal education in Python Development for AI at Nackademin.
  I love building cool things that solve real problems, from computer vision applications to complex web platforms.`,
  location: "Stockholm, Sweden",
  social: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    email: "mailto:hello@example.com"
  }
};

export const SKILLS = [
  "React", "TypeScript", "Tailwind CSS", 
  "Python", "FastAPI", "AI/ML", 
  "YOLO", "Computer Vision", "PyTorch",
  "Git", "Docker", "SQL"
];

export const EXPERIENCES: Experience[] = [
  {
    id: "sigma",
    role: "Software Developer",
    company: "Sigma Connectivity",
    period: "Present",
    description: "Working on cutting-edge software solutions in Stockholm."
  },
  {
    id: "nackademin",
    role: "Python Development in AI",
    company: "Nackademin",
    period: "2023",
    description: "Specialized studies in AI, Machine Learning, and Python development."
  },
  {
    id: "freelance",
    role: "Freelance & Hobbyist",
    company: "Self-employed",
    period: "Pre-2023",
    description: "Developed various projects and honed programming skills through freelance gigs and hobby projects."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "badminton-analyzer",
    title: "Badminton Analyzer",
    shortDescription: "AI-powered badminton stroke analysis using YOLO.",
    fullDescription: "A computer vision application that utilizes YOLO (You Only Look Once) object detection to analyze badminton gameplay. It tracks the shuttlecock and players to provide insights into stroke quality, movement patterns, and game statistics. Built to help players improve their technique through data-driven feedback.",
    technologies: ["Python", "YOLO", "OpenCV", "PyTorch"],
    date: "2024",
    videoUrl: "/src/assets/badminton.MP4"
  },
  {
    id: "vla-models",
    title: "VLA Models with Groot & Lerobot",
    shortDescription: "Visual-Language-Action models exploration.",
    fullDescription: "An in-depth exploration and implementation of Visual-Language-Action (VLA) models. This project leverages state-of-the-art frameworks like Groot and Lerobot to bridge the gap between visual understanding, natural language processing, and robotic actions, enabling more intuitive human-robot interaction.",
    technologies: ["Python", "Transformers", "Robotics", "AI"],
    date: "2024"
  },
  {
    id: "spp-denoise",
    title: "SPP Audio Denoising",
    shortDescription: "ML-based audio signal processing for speaker denoising.",
    fullDescription: "A Machine Learning project focused on Signal Processing (SPP) to remove noise from speaker audio. By training models on noisy vs. clean audio pairs, this system effectively suppresses background noise while preserving speech clarity, useful for teleconferencing and audio recording applications.",
    technologies: ["Python", "TensorFlow/PyTorch", "Signal Processing", "Audio Analysis"],
    date: "2023"
  }
];
