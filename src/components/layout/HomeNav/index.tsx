import { motion, Variants } from "framer-motion";
import * as React from "react";
import { BsFillShareFill, BsPersonHeart } from "react-icons/bs";
import { FaDna } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import "./index.css";
import Nav from "./Nav";

const ulVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const liVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  // scrolled: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

const HomeNav: React.FC = () => {
  return (
    <nav className="HomeNav">
      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate="show"
        className="nav__links"
      >
        <motion.li variants={liVariants} className="nav__link">
          <Nav
            text="Attributors"
            icon={<BsFillShareFill size={32} />}
            to="/attributions"
          />
        </motion.li>
        <motion.li variants={liVariants} className="nav__link">
          <Nav
            text="Contribution"
            icon={<RiHandCoinFill size={36} />}
            to="/contribution"
          />
        </motion.li>
        <motion.li variants={liVariants} className="nav__link">
          <Nav
            text="Description"
            icon={<MdDescription size={40} />}
            to="/description"
          />
        </motion.li>
        <motion.li variants={liVariants} className="nav__link">
          <Nav
            text="Engineering Success"
            icon={<FaDna size={32} />}
            to="/engineering"
          />
        </motion.li>
        <motion.li variants={liVariants} className="nav__link">
          <Nav
            text="Human Practices"
            icon={<BsPersonHeart size={36} />}
            to="/human-practices"
          />
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default HomeNav;
