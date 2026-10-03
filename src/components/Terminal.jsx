import React from "react";
import { useState } from "react";

export default function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([
    "Welcome to Iqraa's portfolio! 👋",
    "Type 'help' to see available commands."
  ]);

  const run = () => {
    const c = command.trim().toLowerCase();
    let lines = [];
    if (c === "help") lines = ["whoami", "skills", "projects", "contact", "clear"];
    else if (c === "whoami") lines = ["Iqraa Khan", "Computer Engineering Student", "Full-Stack Developer • Problem Solver"];
    else if (c === "skills") lines = ["Java • Python • React • Spring Boot • MySQL • Git"];
    else if (c === "projects") lines = ["JobTrack", "PaytmGrowly", "StreamFlix", "News Classification"];
    else if (c === "contact") lines = ["Let's connect — visit /contact"];
    else if (c === "clear") lines = [];
    else if (c) lines = [`Command not found: ${c}. Try 'help'.`];
    setOutput(lines);
    setCommand("");
  };

  return (
    <div className="terminal">
      <div className="terminal-top">
        <div className="dots"><i/><i/><i/></div>
        <span>iqraa@portfolio:~</span>
        <small>terminal.sh</small>
      </div>
      <div className="terminal-body">
        {output.map((line, i) => <div key={i} className="terminal-line"><span>›</span>{line}</div>)}
        <div className="terminal-input">
          <span>›</span>
          <input value={command} onChange={e => setCommand(e.target.value)} onKeyDown={e => e.key === "Enter" && run()} placeholder="type a command..." />
          <button onClick={run}>Run</button>
        </div>
      </div>
    </div>
  );
}