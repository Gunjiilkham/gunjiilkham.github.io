import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const TechPortfolio = () => {
  const experiences = [
    {
      company: "Antispace",
      role: "Software Engineer Intern",
      dates: "May 2024 - Aug 2024",
      highlights: [
        "Led debugging initiatives, reducing QA-reported bugs by 30%",
        "Implemented automated workflows reducing manual processing time by 40%",
        "Enhanced system response times from 3s to under 1s"
      ]
    },
    {
      company: "GHOSTAI",
      role: "Software Engineer Intern", 
      dates: "Nov 2023 - Feb 2024",
      highlights: [
        "Enhanced platform features using Next.js and JavaScript",
        "Deployed modular components improving development scalability",
        "Optimized performance, reducing load times by 25%"
      ]
    }
  ];

  const projects = [
    {
      name: "AI-based Study Helper",
      technologies: ["Python", "OpenAI API", "FastAPI", "PostgreSQL"],
      description: "AI-powered study platform generating personalized schedules and explanations"
    },
    {
      name: "CoFound",
      technologies: ["Next.js", "Node.js", "Scikit-learn"],
      description: "Student internship matching platform with ML recommendation engine"
    }
  ];

  const skills = [
    "Python", "JavaScript", "TypeScript", "Next.js", 
    "Node.js", "React", "Machine Learning", 
    "AI", "TensorFlow", "Scikit-learn"
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[#4ecdc4]">Gunjiilkham Altanzaya</h1>
          <p className="text-xl text-[#a0a0a0]">CS Student | Software Engineer | AI Enthusiast</p>
          <div className="flex space-x-4 mt-4">
            <a href="mailto:gunjiilkham@gmail.com" className="text-[#4ecdc4] hover:underline">
              gunjiilkham@gmail.com
            </a>
            <a href="#" className="text-[#4ecdc4] hover:text-white">
              <GitHubLogoIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#4ecdc4] hover:text-white">
              <LinkedInLogoIcon className="w-6 h-6" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#4ecdc4] border-b border-[#2c2c2c] pb-2 mb-4">
            Experience
          </h2>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-6 bg-[#1a1a1a] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-[#4ecdc4]">{exp.role}</h3>
              <p className="text-[#a0a0a0]">{exp.company} | {exp.dates}</p>
              <ul className="list-disc list-inside mt-2 text-[#d0d0d0]">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#4ecdc4] border-b border-[#2c2c2c] pb-2 mb-4">
            Projects
          </h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-6 bg-[#1a1a1a] p-4 rounded-lg">
              <h3 className="text-xl font-bold text-[#4ecdc4]">{project.name}</h3>
              <p className="text-[#a0a0a0] mb-2">
                {project.technologies.join(" | ")}
              </p>
              <p className="text-[#d0d0d0]">{project.description}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#4ecdc4] border-b border-[#2c2c2c] pb-2 mb-4">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="bg-[#2c2c2c] text-[#4ecdc4] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechPortfolio;