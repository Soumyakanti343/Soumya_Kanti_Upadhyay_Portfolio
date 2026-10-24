import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Coding', '#coding'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-wrap container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Soumya home">
          <span className="brand-mark"><Code2 size={19} /></span>
          <span>Soumya<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
}
