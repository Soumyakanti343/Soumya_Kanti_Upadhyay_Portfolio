import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">01 / ABOUT ME</p>
          <h2>Curious by nature.<br /><span>Driven by building.</span></h2>
        </div>
        <div className="about-grid">
          <div className="about-main">
            <p className="about-lead">I’m a third-year Computer Science and Engineering student at Jalpaiguri Government Engineering College, interested in AI, machine learning, and building useful software.</p>
            <p>I like taking ideas from a rough concept to a working project, learning new tools along the way, and strengthening my fundamentals through competitive programming. I’m currently exploring machine learning, deep learning, and generative AI while continuing to improve as a software developer.</p>
            <a className="text-link" href="#contact">Let’s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-facts">
            <div className="fact-card"><span className="fact-icon"><GraduationCap size={20} /></span><div><small>EDUCATION</small><strong>B.Tech in Computer Science</strong><span>Jalpaiguri Government Engineering College</span></div></div>
            <div className="fact-card"><span className="fact-icon"><MapPin size={20} /></span><div><small>BASED IN</small><strong>West Bengal, India</strong><span>Open to opportunities and collaboration</span></div></div>
            <div className="fact-card"><span className="fact-icon"><Sparkles size={20} /></span><div><small>WHAT I ENJOY</small><strong>Learn by building</strong><span>AI projects · Problem solving · Teamwork</span></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
