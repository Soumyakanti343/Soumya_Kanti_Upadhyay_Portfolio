import { ArrowUpRight, Microscope } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-heading"><p className="section-kicker">04 / EXPERIENCE</p><h2>Learning through <span>research.</span></h2></div>
        <article className="experience-card">
          <div className="experience-icon"><Microscope size={25} /></div>
          <div className="experience-body">
            <div className="experience-top"><div><p className="experience-type">RESEARCH INTERNSHIP</p><h3>Multimodal Colon Cancer Detection Model</h3><p className="experience-org">National Institute of Technology (NIT) Durgapur</p></div><span className="date-pill">Jun — Jul 2026</span></div>
            <p className="experience-summary">Worked on a multimodal deep-learning research project exploring how colonoscopy video, histopathology images, and IHC biomarkers can be combined for colorectal polyp classification.</p>
            <ul className="experience-list">
              <li>Explored VideoMAE- and DINOv2-based feature extraction for video and pathology data.</li>
              <li>Worked with attention-based feature aggregation and multimodal fusion using PyTorch.</li>
              <li>Evaluated models using stratified cross-validation and classification, calibration, and ROC-AUC metrics.</li>
            </ul>
            <div className="experience-bottom"><div className="tag-list"><span className="tag">PyTorch</span><span className="tag">VideoMAE</span><span className="tag">DINOv2</span><span className="tag">Deep Learning</span></div><a className="text-link" href="https://github.com/Soumyakanti343/Multimodal_Colon_Cancer_Detection_2-Type-Classification" target="_blank" rel="noreferrer">Research repository <ArrowUpRight size={16} /></a></div>
          </div>
        </article>
      </div>
    </section>
  );
}
