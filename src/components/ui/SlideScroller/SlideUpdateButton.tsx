import * as React from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

type SlideUpdateButtonProps = {
  slideUpdate: "next" | "prev";
  action?: () => void;
};

const SlideUpdateButton: React.FC<SlideUpdateButtonProps> = ({
  slideUpdate,
  action,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        action && action();
      }}
      disabled={action === undefined}
    >
      {slideUpdate === "next" ? (
        <BsCaretRightFill size={32} /> // Next icon
      ) : (
        <BsCaretLeftFill size={32} /> // Prev icon
      )}
    </button>
  );
};

export default SlideUpdateButton;
