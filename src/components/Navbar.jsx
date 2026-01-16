import { NavLink, useLocation } from "react-router-dom";
import { logo } from "../assets/icons/index";
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${
        pathname === "/" ? "fixed" : "bg-slate-100 sticky shadow-md"
      }`}
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
      <div className="container flex justify-between items-center py-4 px-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition-all duration-200 border ${
              isActive
                ? "bg-slate-200 text-slate-800 border-slate-300"
                : "text-slate-700 hover:bg-slate-200 border-transparent"
            }`
          }
        >
          Abhishek
        </NavLink>
        <nav className="flex gap-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded transition-all duration-200 border ${
                isActive
                  ? "bg-slate-200 text-slate-800 border-slate-300"
                  : "text-slate-700 hover:bg-slate-200 border-transparent"
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
                  ? "bg-slate-200 text-slate-800 border-slate-300"
                  : "text-slate-700 hover:bg-slate-200 border-transparent"
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
