import * as React from "react";
import { ColorName, PALLETE } from "../../data/colors";
import { motion, Variants } from "framer-motion";

import "./styles/Problem.css";
import mousePosStore, { MousePos } from "../../data/mousePosStore";

export enum ProblemLayout {
  GRAPHIC_LEFT,
  GRAPHIC_RIGHT,
}

type ProblemProps = {
  color: ColorName;
  layout: ProblemLayout;
  graphic: React.ReactNode;
  content: React.ReactNode;
};

const Problem: React.FC<ProblemProps> = ({
  color,
  layout,
  graphic,
  content,
}) => {
  const [mousePos, setMousePos] = React.useState<MousePos>({ x: 0, y: 0 });
  const [blobMovable, setBlobMovable] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    mousePosStore.subscribe((state) => {
      setMousePos(state);
    });
  }, []);

  const blobVariants: Variants = {
    animate: {
      x: blobMovable && ref.current ? mousePos.x - 200 : 0,
      y: blobMovable && ref.current ? mousePos.y - 200 : 0,
      transition: {
        duration: 0.1,
        ease: "linear",
      },
    },
  };

  const FADEIN_OFFSET = 80;
  const containerMemberVariants: Variants = {
    graphicInitial: {
      x: layout === ProblemLayout.GRAPHIC_LEFT ? -FADEIN_OFFSET : FADEIN_OFFSET,
      opacity: 0,
    },
    contentInitial: {
      x: layout === ProblemLayout.GRAPHIC_LEFT ? FADEIN_OFFSET : -FADEIN_OFFSET,
      opacity: 0,
    },
    reveal: { x: 0, opacity: 1 },
  };

  return (
    <div
      onMouseEnter={() => setBlobMovable(true)}
      onMouseLeave={() => setBlobMovable(false)}
      className="Problem"
      style={{ color: PALLETE[color] }}
    >
      <motion.div
        ref={ref}
        variants={blobVariants}
        animate="animate"
        className="blob"
        style={{ backgroundColor: PALLETE[color] }}
      ></motion.div>
      <div
        className="gauze"
        style={{
          backgroundImage: `radial-gradient(#00000000 3px, ${
            PALLETE[ColorName.LIGHT]
          }dd 4px)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      ></div>
      <div
        className={`container ${
          (layout === ProblemLayout.GRAPHIC_RIGHT && "flex-row-reverse") ||
          (layout === ProblemLayout.GRAPHIC_LEFT && "flex-row")
        }`}
      >
        <motion.div
          variants={containerMemberVariants}
          initial="graphicInitial"
          whileInView="reveal"
          whileHover={{ scale: 1.02 }}
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
          className="graphic"
        >
          {graphic}
        </motion.div>
        <motion.div
          variants={containerMemberVariants}
          initial="contentInitial"
          whileInView="reveal"
          transition={{ ease: "easeOut", duration: 1 }}
          viewport={{ once: true }}
          className="content"
        >
          {content}
        </motion.div>
      </div>
    </div>
  );
};

export default Problem;
