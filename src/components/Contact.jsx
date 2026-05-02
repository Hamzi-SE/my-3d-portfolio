import { useState } from 'react';

import { profile } from '../constants';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mt-12 scroll-mt-24" aria-label="Contact">
      <p className="text-sm leading-relaxed text-muted">
        I'm taking on selective freelance work and open to full-time roles where I can build something I actually care
        about. The fastest way to reach me is email. I read everything within a day.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={handleCopy}
          className="group inline-flex items-center gap-3 rounded-sm border border-accent/40 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-accent transition hover:border-accent hover:bg-accent/10 focus-visible:border-accent focus-visible:bg-accent/10"
          aria-live="polite"
        >
          <span>{copied ? 'Copied' : profile.emailDisplay}</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            {copied ? '✓' : '↗'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
