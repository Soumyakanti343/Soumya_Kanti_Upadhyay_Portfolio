import { Braces, BrainCircuit, Database, Wrench } from 'lucide-react';

const groups = [
  { icon: Braces, title: 'Languages', note: 'Core programming', items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { icon: BrainCircuit, title: 'AI / ML', note: 'Model building & analysis', items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'PyTorch'] },
  { icon: Database, title: 'Frameworks & data', note: 'Building applications', items: ['Flask', 'Streamlit', 'React', 'MySQL', 'SQLite'] },
  { icon: Wrench, title: 'Tools & fundamentals', note: 'Everyday toolkit', items: ['VS Code', 'Jupyter Notebook', 'PyCharm', 'GitHub', 'DSA', 'OOP', 'DBMS', 'Operating Systems'] }
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">02 / TOOLKIT</p><h2>Skills I work <span>with.</span></h2></div>
          <p className="section-side-note">A growing toolkit, built through coursework,<br />experiments, and hands-on projects.</p>
        </div>
        <div className="skills-grid">
          {groups.map(({ icon: Icon, title, note, items }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20} /></span><span className="skill-number">0{index + 1}</span></div>
              <h3>{title}</h3><p>{note}</p>
              <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
