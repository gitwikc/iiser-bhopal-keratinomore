import * as React from "react";
import { motion, Variants } from "framer-motion";

import "./GoalHeader.css";

type GoalHeaderProps = {
  index: number;
};

const imageVariants: Variants = {
  hidden: { y: 64, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

const goalTextVariants: Variants = {
  hidden: { y: -64, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
};

const GoalHeader: React.FC<GoalHeaderProps> = ({ index }) => {
  return (
    <motion.div className="GoalHeader" key={index}>
      <motion.span
        className="sdg_image"
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
      >
        <img
          src={`https://static.igem.wiki/teams/4958/wiki/sdg/${
            index <= 9 ? "0" : ""
          }${index}.png`}
          alt={`Goal ${index}`}
        />
      </motion.span>
      <motion.span
        className="sdg_number"
        variants={goalTextVariants}
        initial="hidden"
        whileInView="show"
      >
        Goal {index}
      </motion.span>
    </motion.div>
  );
};

export default GoalHeader;
