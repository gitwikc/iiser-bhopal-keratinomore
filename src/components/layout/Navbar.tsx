import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { BsFillShareFill, BsGearFill, BsPersonHeart } from "react-icons/bs";
import { FaDna } from "react-icons/fa";
import { MdDescription, MdEditSquare } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";

const Navbar = () => {
  const [top, setTop] = React.useState(true);

  React.useEffect(() => {
    window.onscroll = () => {
      setTop(window.scrollY < 1);
    };
  }, []);

  return (
    <nav className="Navbar">
      <ul className={`${!top && "glass"}`}>
        <li className="text-secondary">
          <NavLink to="/">KeratiNoMore</NavLink>
        </li>
        <li>
          <NavLink to="/attributions">
            <BsFillShareFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contribution">
            <RiHandCoinFill />
          </NavLink>
        </li>
        <li>
          <NavLink to="/description">
            <MdDescription />
          </NavLink>
        </li>
        <li>
          <NavLink to="/engineering">
            <FaDna />
          </NavLink>
        </li>
        <li>
          <NavLink to="/human-practices">
            <BsPersonHeart />
          </NavLink>
        </li>
        <li>
          <NavLink to="/education">
            <MdEditSquare />
          </NavLink>
        </li>
        <li>
          <NavLink to="/model">
            <BsGearFill />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
