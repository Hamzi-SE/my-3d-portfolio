import { experiences } from '../constants';

const ExperienceItem = ({ role, company, companyUrl, period, description, stack }) => {
  return (
    <li className="group relative grid grid-cols-12 gap-4 py-6 transition-all sm:gap-6 lg:py-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]" />

      <header
        className="z-10 col-span-12 mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted lg:col-span-3"
        aria-label={period}
      >
        {period}
      </header>

      <div className="z-10 col-span-12 lg:col-span-9">
        <h3 className="font-medium leading-snug text-text-strong">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="group/link inline-flex items-baseline font-medium leading-tight text-text-strong hover:text-accent focus-visible:text-accent"
          >
            <span>
              {role} <span className="text-muted">·</span> <span className="text-accent">{company}</span>
            </span>
            <span aria-hidden className="ml-1 inline-block transition-transform group-hover/link:translate-x-0.5">
              ↗
            </span>
          </a>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>
        {stack?.length ? (
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="mb-24 scroll-mt-24 lg:mb-32" aria-label="Experience">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-strong lg:sr-only">Experience</h2>

      <ol className="group/list">
        {experiences.map((exp) => (
          <ExperienceItem key={`${exp.company}-${exp.period}`} {...exp} />
        ))}
      </ol>
    </section>
  );
};

export default Experience;
