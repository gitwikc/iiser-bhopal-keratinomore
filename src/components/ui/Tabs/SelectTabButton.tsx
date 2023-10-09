import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

type SelectTabProps = {
  name: string;
  children: React.ReactNode;
  setTab: (key: number, tab: React.ReactNode) => void;
  tabKey: number;
  activeKey: number;
};

const SelectTabButton: React.FC<SelectTabProps> = ({
  name,
  children: element,
  setTab,
  tabKey,
  activeKey,
}) => {
  const updateTab = () => {
    setTab(
      tabKey,
      <>
        <AnimatePresence key={tabKey}>
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
          >
            {element}
          </motion.div>
        </AnimatePresence>
      </>
    );
  };

  React.useEffect(() => {
    console.table({ activeKey, tabKey });
    if (activeKey === tabKey) {
      updateTab();
    }
  }, []);

  return (
    <button
      className={`SelectTabButton ${activeKey === tabKey && "active"}`}
      onClick={() => {
        updateTab();
      }}
    >
      {name}
    </button>
  );
};

export default SelectTabButton;
