import * as React from "react";

import "./Citation.css";
import { useHighlightRefStore } from "../../data/References";

type CitationProps = {
  citeNumber: number;
  children: React.ReactNode;
};

const Citation: React.FC<CitationProps> = ({
  citeNumber,
  children,
}: CitationProps) => {
  const { highlightIndex } = useHighlightRefStore();

  return (
    <span id={`cite__${citeNumber}`} className="Citation">
      <span
        onClick={() => {
          highlightIndex(citeNumber);
          const refSelector = `#ref__${citeNumber}`;
          document
            .querySelector(refSelector)
            ?.scrollIntoView({ block: "center", behavior: "smooth" });
        }}
      >
        {children}
        <sup>[{citeNumber + 1}]</sup>
      </span>
    </span>
  );
};

export default Citation;
