import { motion } from "framer-motion";

import "./styles/index.css";
import Problem, { ProblemLayout } from "../components/layout/Problem";
import { ColorName } from "../data/colors";
import { MdFormatColorFill, MdOutlineWash, MdWash } from "react-icons/md";
import { LuMilk } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { FaHandSparkles, FaPeopleArrows } from "react-icons/fa";
import { RiEmotionLaughFill } from "react-icons/ri";

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
        graphic={<MdWash size={192} />}
        content={<>Washing powder Nirma</>}
      />
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<MdOutlineWash size={192} />}
        content={<>Washing powder Nirma</>}
      />

      <Problem
        color={ColorName.PRIMARY2}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={<LuMilk size={192} />}
        content={<>Doodh si safedi</>}
      />
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<GiClothes size={192} />}
        content={<>Nirma se aaye</>}
      />

      <Problem
        color={ColorName.PRIMARY1}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={<MdFormatColorFill size={192} />}
        content={<>Rangeen kapde bhi</>}
      />
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<FaHandSparkles size={192} />}
        content={<>Khil khil Jaaye</>}
      />

      <Problem
        color={ColorName.PRIMARY2}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={<FaPeopleArrows size={192} />}
        content={<>Sabki pasand Nirma...</>}
      />
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<RiEmotionLaughFill size={192} />}
        content={<>NIRMA</>}
      />
    </div>
  );
};

export default Home;
