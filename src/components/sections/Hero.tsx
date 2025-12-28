const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-5xl mx-auto pt-24">
      <p className="font-mono text-accent mb-5 fade-up">Hi, my name is</p>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground-light mb-4 fade-up fade-up-delay-1">
        Tarun Guruvelli.
      </h1>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-6 fade-up fade-up-delay-2">
        I build data-driven solutions.
      </h2>
      
      <p className="text-slate-light max-w-xl text-lg leading-relaxed mb-12 fade-up fade-up-delay-3">
        I'm a Computer Science student specializing in{" "}
        <span className="text-accent">Data Science</span>,{" "}
        <span className="text-accent">Cloud Computing</span>, and{" "}
        <span className="text-accent">Analytics</span>. Currently focused on building
        scalable cloud-based data pipelines and automation solutions at{" "}
        <a
          href="https://valiqor.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          Valiqor
        </a>
        .
      </p>
      
      <div className="fade-up fade-up-delay-4">
        <a
          href="#projects"
          className="inline-block font-mono text-accent border border-accent rounded px-7 py-4 hover:bg-accent/10 transition-all duration-300"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
