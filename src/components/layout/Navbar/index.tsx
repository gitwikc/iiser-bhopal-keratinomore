import * as React from "react";
import NavItem from "./NavItem";

import {
  SiAlchemy,
  SiInfluxdb,
  SiInformatica,
  SiMicrogenetics,
  SiOpenproject,
  SiProgress,
} from "react-icons/si";

import "./index.css";
import { GiFrayedArrow } from "react-icons/gi";

import { AiOutlineHeatMap } from "react-icons/ai";
import { Link } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="Navbar">
      <div className="brand_icon">
        <Link replace to={"/"}>
          <GiFrayedArrow size={32} />
        </Link>
      </div>
      <div className="nav_links">
        <NavItem
          icon={<SiProgress size={28} />}
          title="Team"
          links={[
            { title: "Members", href: "/members" },
            { title: "Attributions", href: "/attributions" },
            { title: "Collaborations", href: "/collaboration" },
          ]}
        />
        <NavItem
          icon={<SiOpenproject size={28} />}
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
          icon={<SiAlchemy size={28} />}
          title="Wet Lab"
          links={[
            { title: "Notebook", href: "/notebook" },
            { title: "Experiments", href: "/experiments" },
            { title: "Measurements", href: "/measurements" },
            { title: "Proof of Concept", href: "/poc" },
          ]}
        />
        <NavItem
          icon={<SiMicrogenetics size={28} />}
          title="Parts"
          links={[
            { title: "Basic", href: "/basic" },
            { title: "Part Collections", href: "/collections" },
            { title: "Composite Parts", href: "/composite-parts" },
            { title: "Improved Parts", href: "/improved-parts" },
          ]}
        />
        <NavItem
          icon={<SiInfluxdb size={28} />}
          title="Dry Lab"
          links={[
            { title: "Kill Switch Modelling", href: "/modelling" },
            { title: "Molecular Dynamic Simulations", href: "/simulations" },
            { title: "Design of Experiments", href: "/design-experiments" },
            { title: "Hardware Modelling", href: "/hardware-modelling" },
          ]}
        />
        <NavItem
          icon={<AiOutlineHeatMap size={28} />}
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
          icon={<SiInformatica size={28} />}
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
