import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {number:"01", category:"Full-Stack", name:"JobTrack", icon:"💼", color:"blue", description:"A full-stack platform to manage job applications, statuses, interviews and career progress.", stack:["React","Spring Boot","Java","MySQL"], demo:"#", github:"https://github.com/"},
  {number:"02", category:"AI / Hackathon", name:"PaytmGrowly", icon:"🤖", color:"purple", description:"AI business partner concept for Paytm merchants, focused on insights, recommendations and growth.", stack:["Python","AI/ML","Web"], demo:"#", github:"https://github.com/"},
  {number:"03", category:"Web Application", name:"StreamFlix", icon:"🎬", color:"pink", description:"A responsive streaming-style web application with a polished browsing experience.", stack:["Python","Flask","HTML","CSS"], demo:"#", github:"https://github.com/"},
  {number:"04", category:"Machine Learning", name:"News Classification", icon:"📰", color:"cyan", description:"Text classification project using TF-IDF feature extraction and Naive Bayes.", stack:["Python","Scikit-learn","TF-IDF"], demo:"#", github:"https://github.com/"},
  {number:"05", category:"UI / Frontend", name:"Winner Reveal", icon:"🏆", color:"purple", description:"Animated event winner reveal experience with multiple stages and cinematic interactions.", stack:["React","CSS","Animation"], demo:"#", github:"https://github.com/"},
  {number:"06", category:"Management System", name:"ZP School Management", icon:"🏫", color:"blue", description:"A project showcase/management experience using modern frontend components and cloud services.", stack:["React","Firebase","Tailwind"], demo:"#", github:"https://github.com/"}
];

export default function Projects() {
  return <div className="page container inner-page">
    <div className="page-hero"><span className="eyebrow">02 / Projects</span><h1>Things I've <span>built.</span></h1><p>From full-stack applications to AI experiments, these projects represent what I'm learning by doing.</p></div>
    <div className="project-filter"><button className="selected">All</button><button>Full-Stack</button><button>AI / ML</button><button>Frontend</button></div>
    <div className="project-grid large">{projects.map(p => <ProjectCard key={p.name} project={p}/>)}</div>
    <div className="github-banner"><div><Github/><h3>More projects live on GitHub</h3><p>Explore my repositories, experiments and ongoing work.</p></div><a href="https://github.com/" target="_blank" rel="noreferrer" className="primary-btn">Open GitHub <ExternalLink size={17}/></a></div>
  </div>
}