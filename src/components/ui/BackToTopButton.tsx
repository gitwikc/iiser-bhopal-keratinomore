import * as React from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

import "./BackToTopButton.css";

function BackToTopButton() {
  const [showButton, setShowButton] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);

    setShowButton(scrollPosition > 0 && distanceFromBottom > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (showButton) {
      if (isHovered) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0.4, y: 0 });
      }
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [showButton, isHovered, controls]);

  return (
    <motion.button
      className="BackToTop"
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FiArrowUp size={28} />
    </motion.button>
  );
}

export default BackToTopButton;
