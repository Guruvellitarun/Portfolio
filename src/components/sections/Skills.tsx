import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "R", "SQL"],
  },
  {
    title: "Data Science",
    skills: ["Data Cleaning", "Feature Engineering", "Model Evaluation", "Statistical Analysis"],
  },
  {
    title: "Cloud",
    skills: ["AWS S3", "Lambda", "SageMaker", "Rekognition", "Step Functions", "API Gateway"],
  },
  {
    title: "Tools & Libraries",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "PyTorch", "Docker", "Git"],
  },
  {
    title: "Soft Skills",
    skills: ["Leadership", "Problem Solving", "Communication"],
  },
];

const Skills = () => {
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
        <span className="section-number">04.</span>
        Skills & Technologies
      </h2>

      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className="transition-all duration-300"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <h3 className="font-mono text-accent text-sm mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm text-slate-light bg-navy-lighter rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
