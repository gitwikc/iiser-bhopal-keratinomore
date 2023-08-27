import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type SlideProps = {
  title: string;
  stage: "design" | "build" | "test" | "learn";
  cycle: number;
  children: React.ReactNode;
};

const Slide: React.FC<SlideProps> = ({ title, stage, cycle, children }) => {
  return (
    <div className="Slide">
      <div className="info">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            key={`${stage}-${cycle}_${title}`}
            className="title"
          >
            {title}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
            className="meta"
          >
            {stage} [Cycle {cycle}]
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
          className="content"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slide;
