import { ArrowUpRight, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home"><span className="brand-mark"><Code2 size={18} /></span><span>Soumya<span className="brand-dot">.</span></span></a>
        <p>Designed with curiosity. Built with code.</p>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
        <span className="copyright">© {new Date().getFullYear()} Soumya Kanti Upadhyay</span>
      </div>
    </footer>
  );
}
