import * as React from "react";

type CycleSelectorProps = {
  maxCycles: number;
  currentCycle: number;
  setCycle: (cycle: number) => void;
};

const CycleSelector: React.FC<CycleSelectorProps> = ({
  maxCycles,
  currentCycle,
  setCycle,
}) => {
  // console.log(maxCycles);
  return (
    <div className="CycleSelector">
      <ul>
        {Array(maxCycles)
          .fill(0)
          .map((_, i) => (
            <li key={i}>
              <span
                className={`cycle ${currentCycle === i + 1 ? "active" : ""}`}
                onClick={() => setCycle(i + 1)}
              >
                {i + 1}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CycleSelector;
