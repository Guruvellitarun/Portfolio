import { useEffect, useRef, useState } from "react";
import { ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "AWS Attendance Automation",
    description:
      "Serverless attendance system using AWS Textract to extract student info from ID cards, reducing manual processing time by 90%. Includes automated CSV reports and secure authentication.",
    tech: ["Python", "AWS Lambda", "Textract", "S3", "API Gateway", "Cognito"],
    link: null,
  },
  {
    title: "Customer Behavior Analytics Pipeline",
    description:
      "Cloud analytics pipeline to ingest, clean, and transform customer behavior data, improving retention and engagement reporting by 40%.",
    tech: ["AWS S3", "AWS Glue", "AWS Athena", "QuickSight", "SQL", "Python"],
    link: null,
  },
  {
    title: "Financial Data Warehouse & KPI Dashboard",
    description:
      "Cloud-based financial warehouse consolidating billing and transaction data, enabling 100% automated KPI reporting and reducing manual analysis time by 75%.",
    tech: ["BigQuery", "Cloud Functions", "Cloud Scheduler", "Looker Studio", "SQL"],
    link: null,
  },
  {
    title: "Enterprise Log Analytics System",
    description:
      "Scalable log analytics system processing 5M+ log entries daily to identify performance bottlenecks, improving incident response visibility by 60%.",
    tech: ["Azure Data Lake", "Databricks", "Synapse", "Power BI", "Spark"],
    link: null,
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto"
    >
      <h2
        className={`section-heading transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <span className="section-number">03.</span>
        Some Things I've Built
      </h2>

      <div
        className={`grid md:grid-cols-2 gap-5 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="project-card group"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-start mb-6">
              <Folder className="w-10 h-10 text-accent" />
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <span className="font-mono text-xs text-slate/50">Case Study</span>
              )}
            </div>

            <h3 className="text-xl font-semibold text-foreground-light mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-light text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
