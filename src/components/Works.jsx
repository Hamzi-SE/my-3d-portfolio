import { projects } from '../constants';

const ProjectItem = ({ index, name, blurb, stack, image, href, repo }) => {
  const number = String(index + 1).padStart(2, '0');
  const cardHref = href || repo;

  return (
    <li className="group relative isolate py-6 transition lg:py-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      {cardHref ? (
        <div
          aria-hidden
          className="absolute -inset-x-4 -inset-y-2 -z-10 hidden rounded-md transition lg:-inset-x-6 lg:block lg:group-hover:bg-surface/40 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]"
        />
      ) : null}

      {cardHref ? (
        <a
          href={cardHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} (opens in new tab)`}
          className="absolute -inset-x-4 -inset-y-2 z-10 rounded-md focus-visible:ring-2 focus-visible:ring-accent/50 lg:-inset-x-6"
        />
      ) : null}

      <div className="grid grid-cols-12 items-start gap-4 sm:gap-6">
        <span className="col-span-2 mt-1 font-mono text-xs tracking-[0.2em] text-muted sm:col-span-1">{number}</span>

        <div className="col-span-10 sm:col-span-4">
          {image ? (
            <div className="overflow-hidden rounded border border-line bg-surface">
              <img
                src={image}
                alt={`${name} screenshot`}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          ) : null}
        </div>

        <div className="col-span-12 sm:col-span-7">
          <h3 className="flex items-baseline font-medium text-text-strong">
            <span className="transition-colors group-hover:text-accent">{name}</span>
            {href ? (
              <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            ) : null}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text">{blurb}</p>
          {stack?.length ? (
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] text-muted">
              {stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="link-underline relative z-20 mt-3 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-muted hover:text-accent"
            >
              Source ↗
            </a>
          ) : null}
        </div>
      </div>
    </li>
  );
};

const Works = () => {
  return (
    <section id="work" className="mb-24 scroll-mt-24 lg:mb-32" aria-label="Selected work">
      <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-text-strong lg:sr-only">Selected Work</h2>

      <ol className="group/list">
        {projects.map((project, i) => (
          <ProjectItem key={project.name} index={i} {...project} />
        ))}
      </ol>
    </section>
  );
};

export default Works;
