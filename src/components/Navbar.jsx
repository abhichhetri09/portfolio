import { NavLink } from "react-router-dom";
import Button from "./Button";
const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="rounded-lg flex shadow-md p-2 m-2 items-center justify-center "
      >
        <p className="blue-gradient_text">Home</p>
      </NavLink>
      <nav className="flex space-x-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-black"
          }
        >
          About
        </NavLink>{" "}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-800" : "text-black"
          }
        >
          Projects
        </NavLink>
      </nav>
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
