import { Link, useLocation } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={pathname === "/" ? "hidden" : "block bg-slate-800 "}>
      <div className="container py-8 flex flex-col md:flex-row justify-center border-t border-t-white/10 md:justify-between gap-4">
        <p className="text-white text-center">
          © 2025 <strong>Abhishek Khati Chhetri</strong>. All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
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
