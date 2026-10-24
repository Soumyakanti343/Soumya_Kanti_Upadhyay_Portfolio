import { ArrowUpRight, Code2, Trophy, Target } from 'lucide-react';

const profiles = [
  { name: 'LeetCode', handle: 'SoumyaKanti16', rating: '2087', label: 'Max rating · Knight', solved: '1,000+', href: 'https://leetcode.com/u/SoumyaKanti16/', mark: 'LC' },
  { name: 'CodeChef', handle: 'soumyakanti16', rating: '1654', label: 'Current rating provided', solved: '300+', href: 'https://www.codechef.com/users/soumyakanti16', mark: 'CC' },
  { name: 'Codeforces', handle: 'upadhyaysoumyakanti', rating: '1182', label: 'Rating', solved: '100+', href: 'https://codeforces.com/profile/upadhyaysoumyakanti', mark: 'CF' }
];

export default function CodingProfiles() {
  return (
    <section className="section" id="coding">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div><p className="section-kicker">05 / PROBLEM SOLVING</p><h2>Practice makes <span>progress.</span></h2></div>
          <p className="section-side-note">Competitive programming keeps me curious,<br />consistent, and comfortable with challenges.</p>
        </div>
        <div className="coding-grid">
          {profiles.map((profile, index) => (
            <a className="coding-card" key={profile.name} href={profile.href} target="_blank" rel="noreferrer">
              <div className="coding-card-head"><span className={`coding-mark coding-mark-${index + 1}`}>{profile.mark}</span><ArrowUpRight size={18} /></div>
              <h3>{profile.name}</h3><p className="coding-handle">@{profile.handle}</p>
              <div className="coding-stats"><div><strong>{profile.rating}</strong><span>{profile.label}</span></div><div><strong>{profile.solved}</strong><span>Problems solved</span></div></div>
              <div className="coding-visit">View profile <ArrowUpRight size={15} /></div>
            </a>
          ))}
        </div>
        <div className="achievement-strip">
          <div className="achievement-strip-icon"><Trophy size={21} /></div>
          <div><p className="section-kicker">HIGHLIGHT</p><h3>Naukri Campus Young Turks 2026</h3><p>Qualified for Round 2 after scoring in the 96.85th percentile in Round 1.</p></div>
          <Target className="achievement-watermark" size={58} />
        </div>
      </div>
    </section>
  );
}
