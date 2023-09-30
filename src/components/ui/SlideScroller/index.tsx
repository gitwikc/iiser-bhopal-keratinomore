import * as React from "react";
import SlideUpdatePanel from "./SlideUpdatePanel";
import { motion, AnimatePresence } from "framer-motion";

import "./index.css";
import { MdModeOfTravel } from "react-icons/md";

type SlideScrollerProps = {
  title: string;
  children: React.ReactNode;
};

const SlideScroller: React.FC<SlideScrollerProps> = ({ title, children }) => {
  const slides = React.Children.toArray(children);
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);
  const [slidesInfo, setSlidesInfo] = React.useState<
    {
      cycle: number;
      stage: "design" | "build" | "test" | "learn";
    }[]
  >([]);
  const nextSlide = () => setCurrentSlide((c) => c + 1);
  const prevSlide = () => setCurrentSlide((c) => c - 1);

  React.useEffect(() => {
    const a:
      | ((
          prevState:
            | { cycle: number; stage: "design" | "build" | "test" | "learn" }[]
            | undefined
        ) =>
          | { cycle: number; stage: "design" | "build" | "test" | "learn" }[]
          | undefined)
      | {
          // @ts-ignore
          cycle: any;
          // @ts-ignore
          stage: any;
        }[]
      | undefined = [];

    slides.forEach((slide) => {
      a.push({
        // @ts-ignore
        cycle: slide.props.cycle,
        // @ts-ignore
        stage: slide.props.stage,
      });
    });
    // @ts-ignore
    setSlidesInfo(a);
  }, []);

  React.useEffect(() => {
    console.log(`Current slide = ${currentSlide}`);
  }, [currentSlide]);

  return (
    <div className={`SlideScroller ${currentSlide === 0 ? "cover" : "slides"}`}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
        className={`title ${currentSlide === 0 ? "large" : "small"}`}
      >
        {title}
      </motion.div>
      <AnimatePresence initial={false} key={currentSlide}>
        {currentSlide === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            className="btn__start"
            key={currentSlide}
          >
            <button onClick={nextSlide}>
              <span>
                <MdModeOfTravel size={36} />
              </span>
              <span>Relive the Journey</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {currentSlide > 0 && (
        <>
          {slides[currentSlide - 1]}
          <SlideUpdatePanel
            currentSlide={slidesInfo![currentSlide - 1]}
            prevSlide={currentSlide > 0 ? prevSlide : undefined}
            nextSlide={
              currentSlide <= slidesInfo!.length - 1 ? nextSlide : undefined
            }
            setCycle={(cycle: number) => {
              // TODO Set the current cycle
              setCurrentSlide(() => {
                const i = slidesInfo.findIndex(
                  (slide) => slide.cycle === cycle && slide.stage === "design"
                );
                console.log(i + 1);
                return i + 1;
              });
            }}
            // /TODO Calculate the max no of cycles
            maxCycles={slides.length / 4}
          />
        </>
      )}
    </div>
  );
};

export default SlideScroller;
