import * as React from "react";
import { FaGraduationCap, FaDna, FaPagelines } from "react-icons/fa";
import Nav from "./Nav";
import "../styles/HomeNav.css";

const HomeNav: React.FC = () => {
  return (
    <nav className="HomeNav">
      <ul className="links">
        <li className="group">
          <Nav to="/engineering" icon={<FaDna />} text="Engineering" />
        </li>
        <li className="group">
          <Nav to="/description" icon={<FaPagelines />} text="Description" />
        </li>
        <li className="group">
          <Nav to="/education" icon={<FaGraduationCap />} text="Education" />
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
