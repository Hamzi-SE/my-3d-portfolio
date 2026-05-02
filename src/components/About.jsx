import { about } from '../constants';

const About = () => {
  return (
    <section id="about" className="mb-24 scroll-mt-24 lg:mb-32" aria-label="About">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-strong lg:sr-only">About</h2>

      <div className="space-y-4 text-text">
        {about.map((paragraph, i) => (
          <p key={i} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
