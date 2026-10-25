import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="section section-muted" id="education">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">EDUCATION</p><h2>Building strong <span>foundations.</span></h2></div>
        <div className="education-grid">
          <article className="education-card">
            <span className="education-icon"><GraduationCap size={22} /></span>
            <div className="education-meta"><span>2024 — 2028</span><span className="current-pill">IN PROGRESS</span></div>
            <h3>B.Tech in Computer Science & Engineering</h3>
            <p>Jalpaiguri Government Engineering College (Autonomous)</p>
            <div className="education-score"><strong>9.9</strong><span>CGPA <small>till 4th Sem</small></span></div>
          </article>
          <article className="education-card">
            <span className="education-icon"><GraduationCap size={22} /></span>
            <div className="education-meta"><span>Higher Secondary</span><span>WBCHSE</span></div>
            <h3>Baharu High School</h3>
            <p>West Bengal Council of Higher Secondary Education</p>
            <div className="education-score"><strong>82.4%</strong><span>Class XII</span></div>
          </article>
        </div>
      </div>
    </section>
  );
}
