import * as React from "react";
import SlideUpdatePanel from "./SlideUpdatePanel";

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
  >();
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

  return (
    <div className={`SlideScroller ${currentSlide === 0 ? "cover" : "slides"}`}>
      <div className={`title ${currentSlide === 0 ? "large" : "small"}`}>
        {title}
      </div>
      {currentSlide === 0 && (
        <div className="btn__start">
          <button onClick={nextSlide}>
            <span>
              <MdModeOfTravel size={36} />
            </span>
            <span>Relive the Journey</span>
          </button>
        </div>
      )}
      {currentSlide > 0 && (
        <>
          {slides[currentSlide - 1]}
          <SlideUpdatePanel
            currentSlide={slidesInfo![currentSlide - 1]}
            prevSlide={currentSlide > 0 ? prevSlide : undefined}
            nextSlide={
              currentSlide <= slidesInfo!.length - 1 ? nextSlide : undefined
            }
          />
        </>
      )}
    </div>
  );
};

export default SlideScroller;
