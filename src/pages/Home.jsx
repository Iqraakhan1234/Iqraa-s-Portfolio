import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Code2, Brain, Rocket, TerminalSquare, Zap, Cpu, Layers3, ExternalLink, ChevronRight, CircleDot } from "lucide-react";
import Terminal from "../components/Terminal";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {number:"01", category:"Full-Stack", name:"JobTrack", icon:"💼", color:"blue", description:"A full-stack job application tracker designed to organize applications, interviews and career progress.", stack:["React","Spring Boot","Java","MySQL"], demo:"#", github:"https://github.com/"},
  {number:"02", category:"AI / Hackathon", name:"PaytmGrowly", icon:"🤖", color:"purple", description:"An AI business partner concept for merchants with insights, suggestions and growth-focused automation.", stack:["Python","AI/ML","Web"], demo:"#", github:"https://github.com/"},
  {number:"03", category:"Web App", name:"StreamFlix", icon:"🎬", color:"pink", description:"A movie and streaming-inspired web experience with clean UI and responsive design.", stack:["Python","Flask","HTML/CSS"], demo:"#", github:"https://github.com/"},
  {number:"04", category:"Machine Learning", name:"News Classification", icon:"📰", color:"cyan", description:"A machine-learning news classification system using TF-IDF and Naive Bayes.", stack:["Python","ML","TF-IDF"], demo:"#", github:"https://github.com/"}
];

const stack = [
  ["React","⚛"],["Java","☕"],["Python","🐍"],["Spring Boot","◈"],
  ["MySQL","▣"],["Git","◆"],["REST APIs","⌁"],["AI / ML","✦"]
];

export default function Home() {
  return (
    <div className="page home">
      <div className="ambient-orb orb-one"></div>
      <div className="ambient-orb orb-two"></div>
      <div className="scanline"></div>

      <section className="hero container">
        <div className="hero-copy">
          <div className="status-row">
            <span className="live-status"><i></i> AVAILABLE FOR OPPORTUNITIES</span>
            <span className="system-code">SYS.ID // IQRAA-01</span>
          </div>

          <span className="eyebrow"><Sparkles size={15}/> SOFTWARE • AI • FULL-STACK</span>

          <h1>Hi, I'm <span>Iqraa Khan</span><em>.</em></h1>

          <div className="hero-role">
            <span className="role-line"></span>
            <span>Computer Engineer</span>
            <b>×</b>
            <span>Full-Stack Developer</span>
          </div>

          <p className="hero-text">
            I turn ideas into practical digital products using Java, Python, React and Spring Boot —
            with a strong focus on clean UI, problem solving and continuous learning.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-btn hero-main-btn">
              <Rocket size={17}/> Explore My Work <ArrowRight size={17}/>
            </Link>
            <Link to="/about" className="secondary-btn">
              <Layers3 size={17}/> My Journey
            </Link>
            <a href="/resume.pdf" className="secondary-btn">
              <Download size={17}/> Resume
            </a>
          </div>

          <div className="quick-actions">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={15}/> GitHub <ExternalLink size={12}/></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn <ExternalLink size={12}/></a>
            <a href="mailto:yourmail@example.com"><Mail size={15}/> Email Me</a>
          </div>

          <div className="stats">
            <div><strong>9.91</strong><span>Pointer / CGPA</span><small>ACADEMIC</small></div>
            <div><strong>15+</strong><span>Projects</span><small>BUILDING</small></div>
            <div><strong>5+</strong><span>Hackathons</span><small>EXPERIENCE</small></div>
            <div><strong>∞</strong><span>Learning</span><small>ALWAYS ON</small></div>
          </div>
        </div>

        <div className="hero-side">
          <div className="tech-radar">
            <div className="radar-ring ring-a"></div>
            <div className="radar-ring ring-b"></div>
            <div className="radar-ring ring-c"></div>
            <div className="radar-sweep"></div>
            <div className="radar-core"><Cpu size={23}/></div>
            <span className="radar-label r1">REACT</span>
            <span className="radar-label r2">JAVA</span>
            <span className="radar-label r3">PYTHON</span>
            <span className="radar-label r4">AI</span>
          </div>

          <div className="terminal-label"><TerminalSquare size={14}/> INTERACTIVE DEV CONSOLE <span>● ONLINE</span></div>
          <Terminal/>

          <div className="console-shortcuts">
            <Link to="/skills"><Zap size={14}/> skills</Link>
            <Link to="/projects"><Code2 size={14}/> projects</Link>
            <Link to="/contact"><Mail size={14}/> contact</Link>
            <Link to="/experience"><CircleDot size={14}/> status</Link>
          </div>
        </div>
      </section>

      <section className="tech-marquee-wrap">
        <div className="container tech-heading">
          <span>TECH STACK</span><i></i><small>TOOLS I BUILD WITH</small>
        </div>
        <div className="tech-marquee">
          <div className="tech-marquee-track">
            {[...stack, ...stack].map(([name,icon], i) => (
              <span key={i}><b>{icon}</b>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><Rocket size={15}/> 01 // SELECTED WORK</span>
            <h2>Featured Projects</h2>
            <p>Real builds, experiments and ideas turned into working interfaces.</p>
          </div>
          <Link to="/projects" className="outline-btn">Open Project Lab <ArrowRight size={16}/></Link>
        </div>
        <div className="project-grid">{projects.map(p => <ProjectCard key={p.name} project={p}/>)}</div>
      </section>

      <section className="command-grid container">
        <Link to="/about" className="command-card command-purple">
          <span className="command-index">01</span>
          <div className="command-icon"><Brain/></div>
          <div><small>PROFILE MODULE</small><h3>About Iqraa</h3><p>My journey, mindset and what drives me to build.</p></div>
          <ArrowRight/>
        </Link>
        <Link to="/skills" className="command-card command-blue">
          <span className="command-index">02</span>
          <div className="command-icon"><Code2/></div>
          <div><small>TECH MODULE</small><h3>Skill Matrix</h3><p>Frontend, backend, databases, tools and current learning.</p></div>
          <ArrowRight/>
        </Link>
        <Link to="/achievements" className="command-card command-pink">
          <span className="command-index">03</span>
          <div className="command-icon"><Rocket/></div>
          <div><small>MISSION LOG</small><h3>Achievements</h3><p>Academic milestones, communities and hackathon experiences.</p></div>
          <ArrowRight/>
        </Link>
      </section>

      <section className="split-section container">
        <div className="glass-panel enhanced-panel">
          <div className="panel-topline"><span>PROFILE.EXE</span><span>v2.0.26</span></div>
          <div className="panel-title"><Code2/> About Me</div>
          <p>I’m a Computer Engineering student passionate about software development, full-stack applications and data-driven solutions.</p>
          <p>I enjoy turning ideas into usable products, participating in hackathons, collaborating with teams and continuously learning new technologies.</p>
          <Link to="/about" className="panel-button">Read Full Profile <ChevronRight size={15}/></Link>
        </div>
        <div className="glass-panel enhanced-panel">
          <div className="panel-topline"><span>STACK.STATUS</span><span className="green-text">ONLINE</span></div>
          <div className="panel-title"><Brain/> Current Toolkit</div>
          <div className="mini-skills">
            {["React","Java","Python","Spring Boot","MySQL","Git","REST APIs","Firebase"].map(x => <span key={x}>{x}</span>)}
          </div>
          <Link to="/skills" className="panel-button">Open Skill Matrix <ChevronRight size={15}/></Link>
        </div>
      </section>

      <section className="cta container">
        <span className="eyebrow"><Sparkles size={15}/> FINAL TRANSMISSION</span>
        <h2>Have an idea?<br/><span>Let's build it.</span></h2>
        <p>Open to projects, collaborations, technical opportunities and conversations about technology.</p>
        <div className="cta-buttons">
          <Link to="/contact" className="primary-btn"><Mail size={17}/> Start a Conversation <ArrowRight size={17}/></Link>
          <Link to="/projects" className="secondary-btn"><Code2 size={17}/> View Project Archive</Link>
        </div>
        <div className="footer-terminal">IQRAA_PORTFOLIO // CONNECTION_READY // <span>END OF TRANSMISSION_</span></div>
      </section>
    </div>
  );
}
