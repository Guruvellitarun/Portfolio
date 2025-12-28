import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-2xl mx-auto text-center"
    >
      <p
        className={`font-mono text-accent mb-4 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        06. What's Next?
      </p>

      <h2
        className={`text-4xl md:text-5xl font-bold text-foreground-light mb-6 transition-all duration-500 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Get In Touch
      </h2>

      <p
        className={`text-slate-light mb-12 max-w-md mx-auto transition-all duration-500 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        I'm currently looking for Data Science internship opportunities. Whether you have
        a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <a
        href="mailto:guruvelli.tarun2022@vitstudent.ac.in"
        className={`inline-block font-mono text-accent border border-accent rounded px-8 py-4 hover:bg-accent/10 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
