import * as React from "react";
import { Link } from "react-router-dom";
import { useHighlightRefStore } from "../../data/References";

type ReferenceProps = {
  refNumber: number;
  href: string | undefined;
  children: React.ReactNode;
};

const Reference: React.FC<ReferenceProps> = ({ refNumber, href, children }) => {
  const { resetHighlight, index } = useHighlightRefStore();

  return (
    <div
      className="Reference"
      onMouseOver={() => {
        if (index === refNumber) resetHighlight();
      }}
    >
      <Link to={`${href || `#ref__${refNumber}`}`}>{children}</Link>
    </div>
  );
};

export default Reference;
