import { ArrowUpRight, Trophy, Target } from 'lucide-react';

const profiles = [
{
name: 'LeetCode',
handle: 'SoumyaKanti16',
rating: '2087',
label: 'Max rating · Knight',
solved: '1,000+',
href: 'https://leetcode.com/u/SoumyaKanti16/',
image: '/images/leetcode.png',
},
{
name: 'CodeChef',
handle: 'soumyakanti16',
rating: '1667',
label: 'Max rating · ⭐⭐⭐',
solved: '300+',
href: 'https://www.codechef.com/users/soumyakanti16',
image: '/images/codechef.png',
},
{
name: 'Codeforces',
handle: 'upadhyaysoumyakanti',
rating: '1182',
label: 'Max rating · Pupil',
solved: '100+',
href: 'https://codeforces.com/profile/upadhyaysoumyakanti',
image: '/images/codeforces.png',
},
];

export default function CodingProfiles() {
return ( <section className="section" id="coding"> <div className="container"> <div className="section-heading section-heading-row"> <div> <p className="section-kicker">05 / PROBLEM SOLVING</p> <h2>
Practice makes <span>progress.</span> </h2> </div>
      <p className="section-side-note">
        Competitive programming keeps me curious,
        <br />
        consistent, and comfortable with challenges.
      </p>
    </div>

    <div className="coding-grid">
      {profiles.map((profile) => (
        <a
          className="coding-card"
          key={profile.name}
          href={profile.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="coding-card-head">
            <div className="coding-logo">
              <img
                src={profile.image}
                alt={`${profile.name} logo`}
              />
            </div>

            <ArrowUpRight size={18} />
          </div>

          <h3>{profile.name}</h3>
          <p className="coding-handle">@{profile.handle}</p>

          <div className="coding-stats">
            <div>
              <strong>{profile.rating}</strong>
              <span>{profile.label}</span>
            </div>

            <div>
              <strong>{profile.solved}</strong>
              <span>Problems solved</span>
            </div>
          </div>

          <div className="coding-visit">
            View profile <ArrowUpRight size={15} />
          </div>
        </a>
      ))}
    </div>

    <div className="achievement-strip">
      <div className="achievement-strip-icon">
        <Trophy size={21} />
      </div>

      <div>
        <p className="section-kicker">HIGHLIGHT</p>
        <h3>Naukri Campus Young Turks 2026</h3>
        <p>
          Qualified for Round 2 after scoring in the 96.85th
          percentile in Round 1.
        </p>
      </div>

      <Target className="achievement-watermark" size={58} />
    </div>
  </div>
</section>

);
}

