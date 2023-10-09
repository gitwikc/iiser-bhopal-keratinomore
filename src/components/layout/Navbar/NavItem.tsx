import * as React from "react";
import { Link } from "react-router-dom";

type NavItemProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
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
      onMouseOver={() => setShowDropdown(true)}
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
    >
      <span className="icon">{icon}</span>
      <span className="text">{title}</span>

      {links.length > 0 && (
        <ul className={`dropdown ${showDropdown && "active"}`}>
          {links.map((link) => (
            <li>
              <Link className="transition-all duration-300" to={link.href}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavItem;
