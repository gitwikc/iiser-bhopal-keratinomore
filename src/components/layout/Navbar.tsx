import * as React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  const [top, setTop] = React.useState(true);

  React.useEffect(() => {
    window.onscroll = () => {
      setTop(window.scrollY < 1);
    };
  }, []);

  return (
    <nav className={`Navbar ${!top && "glass"}`}>
      <ul>
        <li className="text-secondary">
          <NavLink to="/">KeratiNoMore</NavLink>
        </li>
        <li>
          <NavLink to="/attributions">Attributions</NavLink>
        </li>
        <li>
          <NavLink to="/contribution">Contribution</NavLink>
        </li>
        <li>
          <NavLink to="/description">Description</NavLink>
        </li>
        <li>
          <NavLink to="/engineering">Engineering Success</NavLink>
        </li>
        <li>
          <NavLink to="/human-practices">Human Practices</NavLink>
        </li>
        <li>
          <NavLink to="/education">* Education</NavLink>
        </li>
        <li>
          <NavLink to="/model">* Model</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
