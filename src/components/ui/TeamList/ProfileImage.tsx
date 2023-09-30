import * as React from "react";
import { motion, Variants } from "framer-motion";

type ProfileImageProps = {
  imageURL: string;
  name: string;
  invertAlign: boolean;
};

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageURL,
  name,
  invertAlign,
}) => {
  const imageVariants: Variants = {
    hidden: {
      x: invertAlign ? -50 : 50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      filter: "grayscale(0) contrast(1.0)",
      transition: { duration: 0.75 },
    },

    hover: {
      scale: 1.05,
      filter: "grayscale(0.4) contrast(1.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="ProfileImage">
      <motion.img
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        whileHover="hover"
        viewport={{ once: true }}
        src={imageURL}
        alt={name}
      />
    </div>
  );
};

export default ProfileImage;
