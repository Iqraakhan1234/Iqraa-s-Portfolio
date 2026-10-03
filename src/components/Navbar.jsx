import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Moon, Sparkles } from "lucide-react";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/experience", "Experience"],
  ["/achievements", "Achievements"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        <span className="brand-mark">IK</span>
        <span>Iqraa Khan</span>
      </Link>

      <nav>
        {links.map(([path, label]) => (
          <NavLink key={path} to={path} className={({isActive}) => isActive ? "active" : ""}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-actions">
        <button className="icon-btn" title="Dark mode"><Moon size={17}/></button>
        <Link to="/contact" className="nav-cta"><Sparkles size={16}/> Let's Connect</Link>
      </div>
    </header>
  );
}