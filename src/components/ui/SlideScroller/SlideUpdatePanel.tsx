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
    <div className="SlideUpdatePanel items-center">
      <span className="flex justify-evenly">
        {prevSlide && (
          <SlideUpdateButton slideUpdate="prev" action={() => prevSlide()} />
        )}
        <div className="info">
          <AnimatePresence key={`${currentSlide.cycle}_${currentSlide.stage}`}>
            {/* <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.2 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="cycle"
              key={currentSlide.cycle}
              >
              Cycle {currentSlide.cycle}
            </motion.span> */}
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
        <SlideUpdateButton slideUpdate="next" action={nextSlide || undefined} />
      </span>
      <span className="flex gap-2 items-center rounded border-white border-opacity-20 border-[1px] p-2">
        <span className="text-white" style={{ fontSize: "0.8rem" }}>
          Cycle
        </span>
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
