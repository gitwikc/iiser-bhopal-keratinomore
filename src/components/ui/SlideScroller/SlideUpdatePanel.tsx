import * as React from "react";
import SlideUpdateButton from "./SlideUpdateButton";

type SlideUpdatePanelProps = {
  currentSlide: {
    cycle: number;
    stage: "design" | "build" | "test" | "learn";
  };
  nextSlide?: () => void;
  prevSlide?: () => void;
};

const SlideUpdatePanel: React.FC<SlideUpdatePanelProps> = ({
  currentSlide,
  prevSlide,
  nextSlide,
}) => {
  // const cycle = Math.floor(currentSlide / 4);
  // const stage = "Design Build Test Learn".split(" ")[currentSlide % 4];

  return (
    <div className="SlideUpdatePanel flex justify-between">
      {prevSlide && (
        <SlideUpdateButton slideUpdate="prev" action={() => prevSlide()} />
      )}
      <div className="info">
        <span className="cycle">Cycle {currentSlide.cycle}</span>{" "}
        <span className="stage">{currentSlide.stage}</span>
      </div>
      {nextSlide && (
        <SlideUpdateButton slideUpdate="next" action={() => nextSlide()} />
      )}
    </div>
  );
};

export default SlideUpdatePanel;
