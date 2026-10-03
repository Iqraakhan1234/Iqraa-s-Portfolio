import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.color}`}>
      <div className="project-top">
        <span className="project-tag">{project.category}</span>
        <span className="project-number">{project.number}</span>
      </div>
      <div className="project-icon">{project.icon}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="chips">
        {project.stack.map(x => <span key={x}>{x}</span>)}
      </div>
      <div className="project-actions">
        <a href={project.demo} target="_blank" rel="noreferrer"><ArrowUpRight size={16}/> Live Demo</a>
        <a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
      </div>
    </article>
  );
}