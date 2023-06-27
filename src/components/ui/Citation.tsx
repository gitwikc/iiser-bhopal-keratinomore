import * as React from "react";
import { Link } from "react-router-dom";

import "./styles/Citation.css";
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
    <div id={`cite__${citeNumber}`} className="Citation">
      <Link
        to={`#ref__${citeNumber}`}
        onClick={() => highlightIndex(citeNumber)}
      >
        {children}
      </Link>
    </div>
  );
};

export default Citation;
