import * as React from "react";
import NavItem from "./NavItem";

import { BsAndroid, BsBagCheckFill } from "react-icons/bs";

import "./index.css";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="Navbar">
      <div className="brand_icon">
        <BsAndroid size={32} />
      </div>
      <div className="nav_links">
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Team"
          links={[
            { title: "Members", href: "/members" },
            { title: "Attributions", href: "/attributions" },
            { title: "Collaborations", href: "/collaboration" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Project"
          links={[
            { title: "Description", href: "/description" },
            { title: "Design", href: "/design" },
            { title: "Contribution", href: "/contribution" },
            { title: "Engineering", href: "/engineering" },
            { title: "Results", href: "/results" },
            { title: "Safety", href: "/safety" },
            { title: "Future Prospects", href: "/future" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Wet Lab"
          links={[
            { title: "Notebook", href: "/notebook" },
            { title: "Experiments", href: "/experiments" },
            { title: "Measurements", href: "/measurements" },
            { title: "Proof of Concept", href: "/poc" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Parts"
          links={[
            { title: "Basic", href: "/basic" },
            { title: "Part Collections", href: "/collections" },
            { title: "Composite Parts", href: "/composite-parts" },
            { title: "Improved Parts", href: "/improved-parts" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Dry Lab"
          links={[
            { title: "Kill Switch Modelling", href: "/modelling" },
            { title: "Molecular Dynamic Simulations", href: "/simulations" },
            { title: "Design of Experiments", href: "/design-experiments" },
            { title: "Hardware Modelling", href: "/hardware-modelling" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Human Practices"
          links={[
            { title: "Integrated Human Practices", href: "/human-practices" },
            { title: "Communication & Education", href: "/education" },
            { title: "Outreach", href: "/outreach" },
            { title: "Sustainable Development", href: "/sustainable" },
            { title: "Inclusivity and Diversity", href: "/inclusivity" },
          ]}
        />
        <NavItem
          icon={<BsBagCheckFill size={28} />}
          title="Implementation"
          links={[
            { title: "Hardware", href: "/hardware" },
            { title: "Entrpreneurship", href: "/entrpreneurship" },
          ]}
        />
      </div>
    </nav>
  );
};

export default Navbar;
