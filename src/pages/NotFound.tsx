import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <h1 className="text-7xl md:text-9xl font-bold text-accent mb-4">404</h1>
      <p className="text-xl text-foreground-light mb-8">Oops! Page not found</p>
      <Link
        to="/"
        className="font-mono text-accent border border-accent rounded px-6 py-3 hover:bg-accent/10 transition-colors duration-300"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
