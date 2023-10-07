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
      onMouseLeave={() => {
        setTimeout(() => {
          setShowDropdown(false);
        }, 200);
      }}
    >
      <section
        className="flex items-center gap-2 justify-evenly"
        onMouseOver={() => setShowDropdown(true)}
      >
        <span className="icon">{icon}</span>
        <span className="text">{title}</span>
      </section>

      <ul
        className={`dropdown ${showDropdown && "active"}`}
        style={{
          display: showDropdown ? "block" : "none",
        }}
      >
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
