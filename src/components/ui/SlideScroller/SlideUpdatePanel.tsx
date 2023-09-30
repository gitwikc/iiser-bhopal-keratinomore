import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideUpdateButton from "./SlideUpdateButton";
import CycleSelector from "./CycleSelector";

type SlideUpdatePanelProps = {
  currentSlide: {
    cycle: number;
    stage: "design" | "build" | "test" | "learn";
  };
  nextSlide?: () => void;
  prevSlide?: () => void;
  maxCycles: number;
  setCycle: (cycle: number) => void;
};

const SlideUpdatePanel: React.FC<SlideUpdatePanelProps> = ({
  currentSlide,
  prevSlide,
  nextSlide,
  maxCycles,
  setCycle,
}) => {
  return (
    <div className="SlideUpdatePanel flex flex-col">
      <span className="flex justify-evenly">
        {prevSlide && (
          <SlideUpdateButton slideUpdate="prev" action={() => prevSlide()} />
        )}
        <div className="info">
          <AnimatePresence key={`${currentSlide.cycle}_${currentSlide.stage}`}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="cycle"
              key={currentSlide.cycle}
            >
              Cycle {currentSlide.cycle}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="stage"
              key={currentSlide.stage}
            >
              {currentSlide.stage}
            </motion.span>
          </AnimatePresence>
        </div>
        {nextSlide && (
          <SlideUpdateButton slideUpdate="next" action={() => nextSlide()} />
        )}
      </span>
      <span className="">
        <CycleSelector
          currentCycle={currentSlide.cycle}
          maxCycles={maxCycles}
          setCycle={setCycle}
        />
      </span>
    </div>
  );
};

export default SlideUpdatePanel;
