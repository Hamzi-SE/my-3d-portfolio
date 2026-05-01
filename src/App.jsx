import { About, Contact, Experience, Footer, SideRail, Works } from './components';

const App = () => {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-surface focus:px-3 focus:py-2 focus:text-sm focus:text-text-strong"
      >
        Skip to content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <SideRail />

        <main id="main" className="pt-24 lg:w-[52%] lg:py-24">
          <About />
          <Experience />
          <Works />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
