import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      {/* Mobile Social Links */}
      <div className="flex justify-center gap-6 mb-4 lg:hidden">
        <a
          href="https://github.com/Guruvellitarun"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-light hover:text-accent transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/tarunguruvelli"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-light hover:text-accent transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:guruvelli.tarun2022@vitstudent.ac.in"
          className="text-slate-light hover:text-accent transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      <a
        href="https://github.com/Guruvellitarun"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-slate hover:text-accent transition-colors"
      >
        <p>Designed & Built by Tarun Guruvelli</p>
      </a>
    </footer>
  );
};

export default Footer;
