import * as React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { ColorName, PALLETE } from "../../data/colors";
import Wave from "react-wavify";

type HeroSectionProps = {
  imageURL: string;
  title: string;
  description: string;
  imageCredit: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  imageURL,
  title,
  description,
  imageCredit,
}) => {
  return (
    <div
      className="HeroSection relative"
      style={{
        background: `linear-gradient(160deg, ${PALLETE[ColorName.PRIMARY1]}, ${
          PALLETE[ColorName.PRIMARY2]
        }bb, #00000000), url("${imageURL}")`,
        backgroundSize: "cover",
      }}
    >
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ filter: "blur(3px)" }}
        animate={{ filter: "blur(0px)" }}
        className="container"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            textShadow: `0 0 3px ${PALLETE[ColorName.DARK]}bb`,
          }}
          whileHover={{
            y: -3,
            textShadow: `0 0 3px ${PALLETE[ColorName.DARK]}cc`,
            transition: { duration: 0.15 },
          }}
          className="title"
        >
          {title}
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="desc"
        >
          {description}
        </motion.div>
      </motion.div>

      <Wave
        fill={PALLETE[ColorName.LIGHT]}
        className="absolute bottom-0 opacity-40"
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.2,
          points: 6,
        }}
      />
      <Wave
        fill={PALLETE[ColorName.LIGHT]}
        className="absolute bottom-0 opacity-50"
        paused={false}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.25,
          points: 5,
        }}
      />
      <Wave
        fill={PALLETE[ColorName.LIGHT]}
        className="absolute light bottom-0 opacity-100"
        paused={false}
        options={{
          height: 20,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
      />

      <div className="credit">{imageCredit}</div>
    </div>
  );
};

export default HeroSection;
