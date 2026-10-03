import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const commands = [
  ["Home", "/"], ["About", "/about"], ["Projects", "/projects"],
  ["Skills", "/skills"], ["Experience", "/experience"],
  ["Achievements", "/achievements"], ["Contact", "/contact"]
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fn = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(v => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const filtered = commands.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));

  if (!open) return (
    <button className="floating-search" onClick={() => setOpen(true)}>
      <Search size={17}/> Search <kbd>Ctrl K</kbd>
    </button>
  );

  return (
    <div className="palette-backdrop" onClick={() => setOpen(false)}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <div className="palette-input">
          <Search size={18}/>
          <input autoFocus placeholder="Search pages..." value={query} onChange={e => setQuery(e.target.value)}/>
          <button onClick={() => setOpen(false)}><X size={18}/></button>
        </div>
        <div className="command-list">
          {filtered.map(([name, path]) => (
            <button key={path} onClick={() => { navigate(path); setOpen(false); setQuery(""); }}>
              <span>{name}</span><span>↵</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}