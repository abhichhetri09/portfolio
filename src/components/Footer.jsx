import { Link, useLocation } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname === "/" ? "hidden" : "block bg-slate-100 shadow-md"}>
      <div className="container py-8 flex flex-col md:flex-row justify-center border-t border-t-slate-300 md:justify-between gap-4">
        <p className="text-slate-700 text-center">
          © 2025 <strong className="text-slate-800">Abhishek Khati Chhetri</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target="_blank"
              className="hover:opacity-70 transition-opacity"
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
