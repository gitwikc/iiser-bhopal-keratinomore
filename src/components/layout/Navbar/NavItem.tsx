import * as React from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  icon: React.ReactNode;
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const NavItem: React.FC<NavItemProps> = ({ icon, title, links }) => {
  const [showDropdown, setShowDropdown] = React.useState<boolean>(false);

  return (
    <div
      className="NavItem"
      id={title}
      onMouseOver={() => setShowDropdown(true)}
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
    >
      <span className="icon">{icon}</span>
      <span className="text">{title}</span>

      <ul className={`dropdown ${showDropdown && "active"}`}>
        {links.map((link) => (
          <li>
            <Link to={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItem;
