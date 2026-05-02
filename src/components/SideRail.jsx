import { useEffect, useState } from 'react';

import { navLinks, profile, socials } from '../constants';

const SideRail = () => {
  const [activeId, setActiveId] = useState(navLinks[0].id);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);
    if (!sections.length) return;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });

        let bestId = null;
        let bestRatio = 0;
        for (const section of sections) {
          const ratio = ratios.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = section.id;
          }
        }
        if (bestId) setActiveId(bestId);
      },
      { rootMargin: '0px 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[44%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="font-serif text-5xl tracking-tight text-text-strong sm:text-6xl">
          <a href="#about" className="transition-colors hover:text-accent">
            {profile.name}
          </a>
        </h1>
        <h2 className="mt-3 font-sans text-lg font-medium text-text-strong">{profile.role}</h2>
        <p className="mt-4 max-w-xs leading-normal text-muted">{profile.tagline}</p>

        {profile.resumeUrl ? (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="link-underline mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-text hover:text-accent"
          >
            Résumé
            <span aria-hidden>↗</span>
          </a>
        ) : null}

        <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max space-y-4">
            {navLinks.map((link) => {
              const isActive = link.id === activeId;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="group flex items-center py-1 font-mono text-xs uppercase tracking-[0.2em]"
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${
                        isActive ? 'w-16 bg-text-strong' : 'w-8 bg-line group-hover:w-16 group-hover:bg-text'
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive ? 'text-text-strong' : 'text-muted group-hover:text-text'
                      }`}
                    >
                      {link.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-12 flex items-center gap-5 lg:mt-0">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-underline font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-accent"
            >
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default SideRail;
