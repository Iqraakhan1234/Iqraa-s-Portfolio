import React from "react";
import { BriefcaseBusiness, Users, Code2, Rocket } from "lucide-react";

const items = [
  ["2026","Full-Stack Development","Building JobTrack with React, Spring Boot, Java and MySQL.","Code2"],
  ["2026","Hackathons & Product Building","Working on AI and software ideas, creating prototypes and presenting solutions.","Rocket"],
  ["2025–2026","GDGC / Technical Communities","Contributing to student developer communities, events and technical activities.","Users"],
  ["Ongoing","Projects & Learning","Continuously practicing DSA, development, Git/GitHub and modern engineering workflows.","BriefcaseBusiness"]
];

const icons = {Code2, Rocket, Users, BriefcaseBusiness};

export default function Experience() {
  return <div className="page container inner-page">
    <div className="page-hero"><span className="eyebrow">04 / Experience</span><h1>Learning through <span>real work.</span></h1><p>My experience is a combination of projects, communities, hackathons and continuous technical growth.</p></div>
    <div className="experience-list">{items.map(([date,title,text,icon]) => { const Icon=icons[icon]; return <article key={title} className="experience-item"><div className="exp-icon"><Icon/></div><div className="exp-content"><span>{date}</span><h2>{title}</h2><p>{text}</p></div></article>})}</div>
    <div className="quote">“The fastest way to learn software is to build software.”<small>— My approach to learning</small></div>
  </div>
}