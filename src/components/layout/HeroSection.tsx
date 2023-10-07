import * as React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";
import { ColorName, PALLETE } from "../../data/colors";
import Wave from "react-wavify";

type HeroSectionProps = {
  title: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
  return (
    <div className="HeroSection relative">
      {/* <motion.div
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
      </motion.div> */}

      <section className="brand">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { ease: "linear", duration: 0.1 },
          }}
          className="content"
        >
          {title}
        </motion.div>
      </section>

      <Wave
        fill={PALLETE[ColorName.PRIMARY1]}
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
        fill={PALLETE[ColorName.PRIMARY2]}
        className="absolute bottom-0 opacity-50"
        paused={false}
        options={{
          height: 60,
          amplitude: 20,
          speed: 0.25,
          points: 5,
        }}
      />
      <Wave
        fill={PALLETE[ColorName.PRIMARY2]}
        className="absolute light bottom-0 opacity-100"
        paused={false}
        options={{
          height: 50,
          amplitude: 60,
          speed: 0.15,
          points: 3,
        }}
      />
      <div className="mixer-gradient"></div>
    </div>
  );
};

export default HeroSection;
