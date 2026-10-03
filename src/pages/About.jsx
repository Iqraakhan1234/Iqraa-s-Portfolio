import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Lightbulb, Target } from "lucide-react";

export default function About() {
  return <div className="page container inner-page">
    <div className="page-hero"><span className="eyebrow">01 / About</span><h1>More than code.<br/><span>I'm building my journey.</span></h1><p>A Computer Engineering student who enjoys learning by building, experimenting and collaborating.</p></div>
    <div className="about-grid">
      <div className="portrait-card"><div className="portrait-placeholder">IK</div><div><h3>Iqraa Khan</h3><p>Computer Engineering Student</p></div></div>
      <div className="glass-panel about-copy"><h2>Who I am</h2><p>I’m passionate about creating software that is useful, intuitive and reliable. My journey started with programming fundamentals and has grown into full-stack development, AI/ML experiments and hackathon projects.</p><p>I like understanding how things work, breaking difficult problems into smaller pieces and then turning those ideas into working applications.</p><div className="about-points"><div><GraduationCap/><b>Engineering</b><span>Computer Engineering</span></div><div><Lightbulb/><b>Mindset</b><span>Learn by building</span></div><div><Target/><b>Focus</b><span>Software & product development</span></div></div></div>
    </div>
    <div className="timeline">
      <h2>My Journey</h2>
      {[["2024","Started Computer Engineering","Built my programming foundation and started exploring development."],["2025","Joined technical communities","Participated in clubs, projects, hackathons and collaborative work."],["2026","Full-Stack & AI exploration","Building projects with React, Java, Spring Boot, Python and ML."],["Next","Keep building","Growing as a software engineer and preparing for the next opportunity."]].map(([year,title,text]) => <div className="timeline-item" key={year}><span>{year}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
    </div>
    <Link to="/projects" className="primary-btn">See What I've Built <ArrowRight size={18}/></Link>
  </div>
}