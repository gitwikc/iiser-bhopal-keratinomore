import HeroSection from "../../components/layout/HeroSection";
import Paragraph from "../../components/layout/Paragraph";
import SlideScroller from "../../components/ui/SlideScroller";
import Slide from "../../components/ui/SlideScroller/Slide";
import BgImage from "../../../public/hero-bg/engineering.jpg";

import "./Engineering.css";

const Engineering = () => (
  <div className="Engineering">
    <HeroSection
      title="Engineering Success"
      description="Hacking our way to success!"
      imageURL={BgImage}
      imageCredit={
        <>
          Photo by{" "}
          <a href="https://unsplash.com/@_louisreed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Louis Reed
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/pwcKF7L4-no?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </>
      }
    />

    <main>
      <SlideScroller title="Make a Sandwich">
        <Slide title="Think of your sandwich" cycle={1} stage="design">
          <Paragraph
            title="Dream"
            hierarchy={0}
            content="A dream is what gets you started on your sandwich"
          />
          <Paragraph
            title="Ideate"
            hierarchy={0}
            content="Jotting down these ideas on a paper helps you visualize it"
          />
        </Slide>
        <Slide title="Put it Together" cycle={1} stage="build">
          <Paragraph
            title="Go Shopping"
            hierarchy={0}
            content="What better place to get the stuff than your local supermarket?"
          />
        </Slide>
      </SlideScroller>
    </main>
  </div>
);

export default Engineering;
