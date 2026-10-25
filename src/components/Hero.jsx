import { ArrowDown, ArrowUpRight, Code2, UsersRound, FileText, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO LEARNING & OPPORTUNITIES</div>
          <p className="hero-greeting">Hi, I’m</p>
          <h1>Soumya Kanti<br /><span>Upadhyay.</span></h1>
          <h2 className="hero-role">ML Engineer <span>·</span> GenAI Engineer <span>·</span><br className="role-break" /> Competitive Programmer</h2>
          <p className="hero-description">
            I’m a Computer Science undergraduate who enjoys building practical AI/ML projects,
            exploring intelligent systems, and solving problems through code.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href="/resume.pdf" target="_blank" rel="noreferrer"><FileText size={17} /> View resume</a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/Soumyakanti343" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /> GitHub</a>
            <a href="https://www.linkedin.com/in/soumya-kanti-upadhyay-466b272b5/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><UsersRound size={18} /> LinkedIn</a>
            <a href="https://leetcode.com/u/SoumyaKanti16/" target="_blank" rel="noreferrer" aria-label="LeetCode"><Terminal size={18} /> LeetCode</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="hero-glow"></div>
          <div className="profile-card">
            <div className="profile-top"><span>PROFILE </span><span className="profile-live"><i /> AVAILABLE</span></div>
            <div className="profile-image-wrap">
              <img src="/images/profile.png" alt="Soumya Kanti Upadhyay" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'grid'; }} />
              <div className="profile-fallback">SKU<span>AI / ML</span></div>
            </div>
            <div className="profile-card-bottom">
              <div><strong>Soumya Kanti Upadhyay</strong><span>B.Tech CSE · JGEC ’28</span></div>
              <span className="profile-arrow"><ArrowUpRight size={20} /></span>
            </div>
          </div>
          <div className="float-chip chip-ai"><span className="chip-icon">✳</span><div><strong>AI / ML</strong><small>Build · Experiment · Learn</small></div></div>
          <div className="float-chip chip-cp"><span className="chip-icon chip-icon-code">&lt;/&gt;</span><div><strong>Competitive Coding</strong><small>LeetCode Knight</small></div></div>
          <div className="hero-index">01 <span>/</span> 06</div>
        </div>
      </div>
      <a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
    </section>
  );
}
