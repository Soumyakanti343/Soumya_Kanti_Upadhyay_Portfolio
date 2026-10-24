import { ArrowUpRight, Mail, Phone, MapPin, Code2, UsersRound } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="section-kicker">06 / GET IN TOUCH</p>
            <h2>Have an idea?<br /><span>Let’s build something.</span></h2>
            <p>I’m always happy to connect with people who enjoy technology, AI, and learning by building. Feel free to reach out.</p>
            <a className="button button-primary" href="mailto:upadhyaysoumyakanti@gmail.com">Send me an email <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-details">
            <a href="mailto:upadhyaysoumyakanti@gmail.com" className="contact-detail"><span><Mail size={19} /></span><div><small>EMAIL</small><strong>upadhyaysoumyakanti@gmail.com</strong></div><ArrowUpRight size={16} /></a>
            <a href="tel:+918597688956" className="contact-detail"><span><Phone size={19} /></span><div><small>PHONE</small><strong>+91 8597688956</strong></div><ArrowUpRight size={16} /></a>
            <div className="contact-detail"><span><MapPin size={19} /></span><div><small>LOCATION</small><strong>West Bengal, India</strong></div></div>
            <div className="contact-socials"><a href="https://github.com/Soumyakanti343" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a><a href="https://www.linkedin.com/in/soumya-kanti-upadhyay-466b272b5/" target="_blank" rel="noreferrer"><UsersRound size={17} /> LinkedIn</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
