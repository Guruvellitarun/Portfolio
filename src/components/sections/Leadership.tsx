import { useEffect, useRef, useState } from "react";
import { Award, Users, ExternalLink } from "lucide-react";

const leadershipRoles = [
  {
    title: "Secretary, NSS VIT Chennai",
    period: "2024 – Present",
    description:
      "Elected as Secretary to oversee operations, coordinate events, and lead community service initiatives for a team of 100+ members.",
  },
  {
    title: "NSS Parade Commanding Officer",
    period: "2023 – 2024",
    description: "Led a team of 40+ members, organizing parade activities and training sessions.",
  },
  {
    title: "Workshop Coordinator – Angular, Techno VIT",
    period: "",
    description: "Coordinated a workshop with 75+ participants.",
  },
  {
    title: "Workshop Coordinator – GoLang, Techno VIT",
    period: "",
    description: "Organized a workshop for 55+ participants.",
  },
  {
    title: "National Youth Day Event Coordinator",
    period: "",
    description: "Managed a large-scale event for 200+ participants.",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    link: "#",
  },
  {
    title: "Machine Learning by Stanford University",
    link: "#",
  },
  {
    title: "Data Science Professional Certificate",
    link: "#",
  },
];

const Leadership = () => {
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
      className="py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto"
    >
      <h2
        className={`section-heading transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <span className="section-number">05.</span>
        Leadership & Certifications
      </h2>

      <div
        className={`grid md:grid-cols-2 gap-12 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Leadership Roles */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground-light">Leadership Roles</h3>
          </div>
          <ul className="space-y-6">
            {leadershipRoles.map((role, index) => (
              <li key={index} className="relative pl-4 border-l border-navy-lighter">
                <h4 className="text-foreground-light font-medium">{role.title}</h4>
                {role.period && (
                  <p className="font-mono text-xs text-accent mb-1">{role.period}</p>
                )}
                <p className="text-sm text-slate-light">{role.description}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold text-foreground-light">Certifications</h3>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-light hover:text-accent transition-colors group"
                >
                  <span className="text-accent">▹</span>
                  <span>{cert.title}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
