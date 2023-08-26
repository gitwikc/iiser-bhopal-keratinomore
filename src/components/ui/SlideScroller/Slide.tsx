import * as React from "react";

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
        <div className="title">{title}</div>
        <div className="meta">
          {stage} [Cycle {cycle}]
        </div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Slide;
