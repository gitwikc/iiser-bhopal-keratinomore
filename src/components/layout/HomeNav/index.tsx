import * as React from "react";
import { FaDna } from "react-icons/fa";
import { RiHandCoinFill } from "react-icons/ri";
import { MdDescription } from "react-icons/md";
import { BsPersonHeart, BsFillShareFill } from "react-icons/bs";
import Nav from "./Nav";
import "../styles/HomeNav.css";

const HomeNav: React.FC = () => {
  return (
    <nav className="HomeNav">
      <ul className="links">
        <li className="group">
          <Nav
            to="/attributions"
            icon={<BsFillShareFill />}
            text="Attributions"
          />
        </li>
        <li className="group">
          <Nav
            to="/contribution"
            icon={<RiHandCoinFill />}
            text="Contribution"
          />
        </li>
        <li className="group">
          <Nav
            to="/description"
            icon={<MdDescription size={32} />}
            text="Description"
          />
        </li>
        <li className="group">
          <Nav to="/engineering" icon={<FaDna />} text="Engineering" />
        </li>
        <li className="group">
          <Nav
            to="/human-practice"
            icon={<BsPersonHeart />}
            text="Human Practices"
          />
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
