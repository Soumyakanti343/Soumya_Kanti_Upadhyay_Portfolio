import { ArrowUpRight, Activity, Ship, ScanFace, Gamepad2, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects.js';

const icons = { scan: ScanFace, activity: Activity, ship: Ship, gamepad: Gamepad2 };

export default function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">03 / SELECTED WORK</p><h2>Things I’ve <span>built.</span></h2></div>
          <p className="section-side-note">A mix of AI-powered applications, practical tools,<br />and small experiments made to learn by doing.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = icons[project.icon] || ExternalLink;
            return (
              <article className="project-card" key={project.title}>
                <div className={`project-art project-art-${index + 1}`}>
                  <img src={project.image} alt={`${project.title} screenshot`} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                  <div className="project-art-fallback"><span className="project-art-icon"><Icon size={34} /></span><span className="project-art-label">PROJECT / 0{index + 1}</span><span className="project-art-title">{project.title}</span></div>
                  <a className="project-open" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight size={20} /></a>
                </div>
                <div className="project-content">
                  <p className="project-subtitle">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
                  <div className="tag-list project-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>
                  <div className="project-footer"><a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a><span className="project-count">0{index + 1} / 04</span></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
