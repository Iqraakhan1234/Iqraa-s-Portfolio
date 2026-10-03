import React from "react";
import { Award, Trophy, Users, Star, GraduationCap, Medal } from "lucide-react";

const achievements = [
  [Award,"Academic Excellence","9.91 pointer / strong academic performance","academic"],
  [Trophy,"Hackathons","Participated in multiple hackathons and product-building challenges","hack"],
  [Users,"GDGC","Core team involvement and developer-community activities","community"],
  [Star,"Programmers Club","Contributing to college technical community and projects","community"],
  [GraduationCap,"Certifications","Courses, workshops and continuous technical learning","learning"],
  [Medal,"Project Building","Multiple frontend, full-stack and AI/ML projects","projects"]
];

export default function Achievements() {
  return <div className="page container inner-page">
    <div className="page-hero"><span className="eyebrow">05 / Achievements</span><h1>Milestones I'm <span>proud of.</span></h1><p>Small wins, consistent learning and experiences that keep me moving forward.</p></div>
    <div className="achievement-grid">{achievements.map(([Icon,title,text,kind]) => <article className={`achievement-card ${kind}`} key={title}><div className="achievement-icon"><Icon/></div><h3>{title}</h3><p>{text}</p><span>✦</span></article>)}</div>
    <div className="numbers"><div><strong>9.91</strong><span>Academic Pointer</span></div><div><strong>15+</strong><span>Projects / Experiments</span></div><div><strong>5+</strong><span>Hackathon Experiences</span></div><div><strong>∞</strong><span>Learning</span></div></div>
  </div>
}