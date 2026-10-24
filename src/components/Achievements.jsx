import { Award, BookOpenCheck, Medal } from 'lucide-react';

const achievements = [
  { icon: Medal, title: 'Naukri Campus Young Turks 2026', detail: 'Qualified for Round 2; 96.85 percentile in Round 1.' },
  { icon: Award, title: 'AINCAT 2026', detail: 'Participated in the national-level aptitude and career assessment.' },
  { icon: BookOpenCheck, title: 'AlgoUniversity Camps', detail: 'Completed Dynamic Programming and Graph Theory Camps.' }
];

export default function Achievements() {
  return (
    <section className="section section-muted" id="achievements">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">ACHIEVEMENTS & LEARNING</p><h2>Milestones along <span>the way.</span></h2></div>
        <div className="achievement-grid">
          {achievements.map(({ icon: Icon, title, detail }) => <article className="achievement-card" key={title}><span className="achievement-icon"><Icon size={21} /></span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
      </div>
    </section>
  );
}
