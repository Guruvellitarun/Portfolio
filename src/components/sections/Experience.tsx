import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Valiqor",
    role: "Software Engineering Intern",
    period: "Dec 2025 – Present",
    url: "https://valiqor.com",
    points: [
      "Implemented automated unit and integration tests for trace-processing pipelines, improving test reliability and coverage.",
      "Built CI workflows using GitHub Actions to validate trace data and automate test execution on every commit.",
      "Added multiple test cases and fixed critical bugs, reducing manual trace validation and CI failures.",
      "Authored contributor documentation and scripts to streamline local test execution and developer onboarding.",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto"
    >
      <h2
        className={`section-heading transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <span className="section-number">02.</span>
        Where I've Worked
      </h2>

      <div
        className={`transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {experiences.map((exp) => (
          <div key={exp.company} className="relative pl-6 border-l-2 border-navy-lighter">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent" />
            
            <h3 className="text-xl font-semibold text-foreground-light">
              {exp.role}{" "}
              <span className="text-accent">
                @{" "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {exp.company}
                </a>
              </span>
            </h3>
            
            <p className="font-mono text-sm text-slate mb-4">{exp.period}</p>
            
            <ul className="space-y-3">
              {exp.points.map((point, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-light"
                >
                  <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
