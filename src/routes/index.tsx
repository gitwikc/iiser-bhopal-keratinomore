import { motion } from "framer-motion";

import "./index.css";
import Problem, { ProblemLayout } from "../components/layout/Problem";
import { ColorName } from "../data/colors";
import { GiChicken, GiSandsOfTime } from "react-icons/gi";

const Home = () => {
  return (
    <div className="Home">
      <section className="brand">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { ease: "linear", duration: 0.1 },
          }}
          className="content"
        >
          <span>Kerati</span>
          <span>No</span>
          <span>More</span>
        </motion.div>
      </section>

      {/* Problem statement story */}
      <Problem
        color={ColorName.PRIMARY1}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={<GiChicken size={192} />}
        content={<>Hold your chickens...</>}
      />
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<GiSandsOfTime size={192} />}
        content={<>Coming Soon</>}
      />
    </div>
  );
};

export default Home;
