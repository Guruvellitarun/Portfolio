import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/90 backdrop-blur-md shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a
          href="#"
          className="text-accent font-mono text-xl font-bold hover:opacity-80 transition-opacity"
        >
          TG
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ol className="flex items-center gap-8">
            {navLinks.map(({ name, url }, index) => (
              <li key={name}>
                <a
                  href={url}
                  className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-300"
                >
                  <span className="text-accent mr-1">0{index + 1}.</span>
                  {name}
                </a>
              </li>
            ))}
          </ol>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent border border-accent rounded px-4 py-2 hover:bg-accent/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-accent p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-navy-light/95 backdrop-blur-md md:hidden z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <ol className="flex flex-col items-center gap-8">
              {navLinks.map(({ name, url }, index) => (
                <li key={name}>
                  <a
                    href={url}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-mono text-lg text-foreground hover:text-accent transition-colors"
                  >
                    <span className="text-accent mr-2">0{index + 1}.</span>
                    {name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-accent border border-accent rounded px-8 py-3 hover:bg-accent/10 transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
