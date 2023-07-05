import { motion, Variants } from "framer-motion";

import "./styles/index.css";

const leftVariant: Variants = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0 },
};

const rightVariant: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0 },
};

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
      <section className="prob_state">
        <section id="part1">Content in part 1</section>
        <section id="part2">Content in part 2</section>
        <section id="part3">Content in part 3</section>
      </section>
    </div>
  );
};

export default Home;
