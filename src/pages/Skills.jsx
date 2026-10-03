import React from "react";
import { Code2, Database, GitBranch, Globe, Server, Wrench } from "lucide-react";

const groups = [
  ["Frontend", Globe, ["React.js","JavaScript","HTML5","CSS3","Responsive Design","Tailwind CSS"]],
  ["Backend", Server, ["Java","Spring Boot","Python","Flask","REST APIs"]],
  ["Database", Database, ["MySQL","Firebase / Firestore","SQL"]],
  ["Programming", Code2, ["Java","Python","C / C++","DSA","OOP"]],
  ["Tools", Wrench, ["Git","GitHub","VS Code","Figma","Postman"]],
  ["Currently Learning", GitBranch, ["Advanced Spring Boot","System Design","Data Structures","Cloud & Deployment"]]
];

export default function Skills() {
  return <div className="page container inner-page">
    <div className="page-hero"><span className="eyebrow">03 / Skills</span><h1>My <span>toolbox.</span></h1><p>Technologies I use, understand and continue to improve through projects.</p></div>
    <div className="skill-grid">{groups.map(([name,Icon,items]) => <div className="skill-card" key={name}><div className="skill-icon"><Icon/></div><h3>{name}</h3><div className="skill-list">{items.map(x => <span key={x}>{x}</span>)}</div></div>)}</div>
    <div className="skill-meter glass-panel"><h2>How I learn</h2><div className="meters">{[["Problem Solving","90%"],["Frontend Development","85%"],["Backend Development","75%"],["AI / ML","65%"]].map(([n,v]) => <div key={n}><div><span>{n}</span><b>{v}</b></div><div className="bar"><i style={{width:v}}/></div></div>)}</div></div>
  </div>
}