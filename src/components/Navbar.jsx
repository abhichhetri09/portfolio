import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
  ];
  return (
    <header className="header">
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
      <NavLink to="/">
        <p className="text-2xl blue-gradient_text font-semibold">Home</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
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
    </header>
  );
};
export { Navbar };
