import * as React from "react";
import { NavLink } from "react-router-dom";
import { motion, Variants } from "framer-motion";

type NavProps = {
  to: string;
  icon: React.ReactNode;
  text: string;
};

const contentVariants: Variants = {
  normal: { opacity: 0.6 },
  hovered: { opacity: 1 },
};

const textVariants: Variants = {
  normal: { opacity: 0, y: 5, height: 0 },
  hovered: { opacity: 1, y: 0, height: "auto" },
};

const DURATION = 0.25;

const Nav: React.FC<NavProps> = ({ icon, text, to }: NavProps) => {
  return (
    <NavLink className="Nav" to={to}>
      <motion.div
        variants={contentVariants}
        initial="normal"
        whileHover="hovered"
        transition={{
          duration: DURATION,
        }}
        className="nav__content"
      >
        <motion.i>{icon}</motion.i>
        <motion.span variants={textVariants} transition={{ duration: DURATION }}>
          {text}
        </motion.span>
      </motion.div>
    </NavLink>
  );
};

export default Nav;
