import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile.png";

const technologies = [
  "Python",
  "R",
  "SQL",
  "AWS (Lambda, S3, Glue)",
  "Docker",
  "PyTorch",
  "Pandas & NumPy",
  "Tableau / Power BI",
];

const About = () => {
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
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto"
    >
      <h2
        className={`section-heading transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <span className="section-number">01.</span>
        About Me
      </h2>

      <div
        className={`grid md:grid-cols-3 gap-12 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="md:col-span-2 space-y-4 text-slate-light">
          <p>
            Hello! I'm vishal, a data-driven student pursuing an{" "}
            <span className="text-accent">Integrated MTech in Computer Science</span> at
            VIT Chennai. My passion lies in transforming raw data into actionable
            insights and building automated, cloud-native solutions.
          </p>
          <p>
            I have strong skills in{" "}
            <span className="text-accent">Data Analysis</span>,{" "}
            <span className="text-accent">Cloud Computing</span>, and{" "}
            <span className="text-accent">Statistical Methods</span>. I've built
            cloud-based data pipelines and analytics solutions on AWS, Azure, and
            Google Cloud.
          </p>
          <p>
            Currently, I'm working as a{" "}
            <span className="text-accent">Software Engineering Intern</span> at
            Valiqor, where I focus on automated testing for trace-processing
            pipelines and CI/CD workflows.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>

          <ul className="grid grid-cols-2 gap-2 mt-4">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 font-mono text-sm text-slate"
              >
                <span className="text-accent">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <div className="relative w-64 h-64 rounded overflow-hidden">
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-all duration-300 z-10" />
            <img
              src={profileImage}
              alt="Tarun Guruvelli"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute top-4 left-4 w-64 h-64 border-2 border-accent rounded -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default About;
