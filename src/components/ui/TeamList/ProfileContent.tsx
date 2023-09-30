import * as React from "react";
import { motion, Variants } from "framer-motion";

type ProfileContentProps = {
  name: string;
  department: string;
  major: string;
  year: number;
  bio: string;
  invertAlign: boolean;
};

const ProfileContent: React.FC<ProfileContentProps> = ({
  name,
  department,
  major,
  year,
  bio,
  invertAlign,
}) => {
  const contentInfoVariants: Variants = {
    hidden: {
      x: invertAlign ? 30 : -30,
      opacity: 0,
      filter: "blur(5px)",
    },
    show: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const contentBioVariants: Variants = {
    hidden: { y: 50, opacity: 0, filter: "blur(5px)" },
    show: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="ProfileContent">
      <motion.div
        variants={contentInfoVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="content__info"
      >
        <motion.div variants={contentInfoVariants} className="name">
          {name}
        </motion.div>
        <motion.div variants={contentInfoVariants} className="department">
          {department}
        </motion.div>
        <motion.div variants={contentInfoVariants} className="major">
          {major}
        </motion.div>
        <motion.div variants={contentInfoVariants} className="year">
          Year {year}
        </motion.div>
      </motion.div>
      <motion.div
        variants={contentBioVariants}
        initial="hidden"
        whileInView="show"
        className="content__bio"
        viewport={{ once: true }}
      >
        {bio}
      </motion.div>
    </div>
  );
};

export default ProfileContent;
