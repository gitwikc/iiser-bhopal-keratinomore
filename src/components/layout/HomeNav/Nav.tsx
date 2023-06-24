import * as React from "react";
import { NavLink } from "react-router-dom";

type NavProps = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const Nav: React.FC<NavProps> = ({ icon, text, to }: NavProps) => {
  return (
    <NavLink className="Nav" to={to}>
      <div className="group">
        <i className="icon">{icon}</i>
        <div className="text">
          <span className="opacity-0 duration-300 group-hover:opacity-100">
            {text}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Nav;
