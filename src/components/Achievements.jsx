import { Award, BookOpenCheck, Medal, GraduationCap } from 'lucide-react';

const achievements = [
  {
    icon: GraduationCap,
    title: 'Introduction to Networking',
    detail: 'Completed an NVIDIA-authorized networking course through Coursera.',
    certificate: '/certificates/introduction-to-networking.pdf'
  },
  {
    icon: Medal,
    title: 'Naukri Campus Young Turks 2026',
    detail: 'Qualified for Round 2; 96.85 percentile in Round 1.',
    certificate: '/certificates/young-turks.pdf'
  },
  {
    icon: Award,
    title: 'AINCAT 2026',
    detail: 'Participated in the national-level aptitude and career assessment.',
    certificate: '/certificates/aincat.pdf'
  },
  {
    icon: BookOpenCheck,
    title: 'AlgoUniversity Camps',
    detail: 'Completed Dynamic Programming and Graph Theory Camps.',
    certificate: '/certificates/algouniversity.png'
  }
];

export default function Achievements() {
  return (
    <section className="section section-muted" id="achievements">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">07 / ACHIEVEMENTS & LEARNING</p>
          <h2>Milestones along <span>the way.</span></h2>
        </div>

        <div className="achievement-grid">
          {achievements.map(({ icon: Icon, title, detail, certificate }) => (
            <article className="achievement-card" key={title}>
              <span className="achievement-icon">
                <Icon size={21} />
              </span>

              <h3>{title}</h3>
              <p>{detail}</p>

              {certificate && (
                <a
                  className="text-link achievement-certificate"
                  href={certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate <span>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
