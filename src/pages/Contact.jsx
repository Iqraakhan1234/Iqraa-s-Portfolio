import React from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";

export default function Contact() {
  return <div className="page container inner-page contact-page">
    <div className="page-hero"><span className="eyebrow">06 / Contact</span><h1>Let's build something <span>great.</span></h1><p>Have a project idea, opportunity or simply want to connect? Send me a message.</p></div>
    <div className="contact-grid">
      <div className="contact-info">
        <div className="glass-panel"><Mail/><h3>Email</h3><a href="mailto:yourmail@example.com">yourmail@example.com</a></div>
        <div className="glass-panel"><Linkedin/><h3>LinkedIn</h3><a href="https://linkedin.com/" target="_blank" rel="noreferrer">Connect with me</a></div>
        <div className="glass-panel"><Github/><h3>GitHub</h3><a href="https://github.com/" target="_blank" rel="noreferrer">View repositories</a></div>
        <div className="glass-panel"><MapPin/><h3>Location</h3><p>Mumbai, India</p></div>
      </div>
      <form className="contact-form" onSubmit={e => {e.preventDefault(); alert("Thanks! Connect the form to your email service before deployment.");}}>
        <label>Your name<input required placeholder="Enter your name"/></label>
        <label>Your email<input type="email" required placeholder="you@example.com"/></label>
        <label>Subject<input placeholder="What would you like to discuss?"/></label>
        <label>Message<textarea required rows="6" placeholder="Tell me about your idea..."/></label>
        <button className="primary-btn" type="submit"><Send size={17}/> Send Message</button>
      </form>
    </div>
  </div>
}