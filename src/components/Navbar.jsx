import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets/icons/index";
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${pathname === "/" ? "fixed" : "bg-slate-900 sticky"}`}
    >
      {/* <NavLink
        to="/"
        className="rounded-xl  flex shadow-md p-4 m-2 items-center justify-center bg-slate-700 "
      >
        <p className="text-white text-2xl">Home</p>
      </NavLink>
      <nav className="flex space-x-4 text-white">
        <NavLink
          to="/about"
          className="rounded-xl  flex shadow-md p-4 m-2 items-center justify-center bg-slate-700"
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="rounded-xl  flex shadow-md p-4 m-2 items-center justify-center bg-slate-700"
        >
          Projects
        </NavLink> */}
      {/* </nav> */}
      <div className="container flex justify-between items-center mx-auto px-4 py-2">
        <NavLink to="/">
          <div className="text-white text-xl bg-black/10 rounded-xl p-2">
            Abhishek
          </div>
        </NavLink>
        <nav className="flex gap-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded transition-all duration-200 border ${
                isActive
                  ? "bg-black/30 text-white border-white/10"
                  : "text-white hover:bg-black/30 border-transparent"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-4 py-2 rounded transition-all duration-200 border ${
                isActive
                  ? "bg-black/30 text-white border-white/10"
                  : "text-white hover:bg-black/30 border-transparent"
              }`
            }
          >
            Projects
          </NavLink>
        </nav>
        {/* <Button variant="primary" size="md" title="Home" />

      {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" size="sm">
        Primary
      </Button>
      <Button variant="primary" size="lg">
        Primary
      </Button> */}
      </div>
    </header>
  );
};
export { Navbar };
