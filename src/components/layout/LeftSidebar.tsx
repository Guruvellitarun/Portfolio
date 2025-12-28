import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Guruvellitarun",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tarunguruvelli",
    icon: Linkedin,
  },
];

const LeftSidebar = () => {
  return (
    <div className="fixed left-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-10">
      <ul className="flex flex-col items-center gap-5">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="block p-2 text-slate-light hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
      <div className="vertical-line h-24" />
    </div>
  );
};

export default LeftSidebar;
