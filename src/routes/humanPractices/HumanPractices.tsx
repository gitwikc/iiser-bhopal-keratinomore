import HeroSection from "../../components/layout/HeroSection";
import Paragraph from "../../components/layout/Paragraph";
// import AttributionsBackground from "/hero-bg/attributions.jpg";
import "./HumanPractices.css";

const HumanPractices = () => (
  <div className="HumanPractices">
    <HeroSection
      title={
        <>
          <span>Human</span>
          <span>Practices</span>
        </>
      }
    />

    <main>
      <Paragraph
        hierarchy={0}
        title="Sustainable Development Goals"
        content={
          <Paragraph
            hierarchy={1}
            title="Introduction"
            content={
              <>
                Working on Project KeratiNoMore, we believe in the profound
                wisdom of Robert Swan’s words: "The greatest threat to our
                planet is the belief that someone else will save it". This
                principle has driven us to contribute meaningfully to the
                Sustainable Development Goals (SDGs) and to create a better
                world for us as well as future generations. The SDGs serve as
                our roadmap, guiding our efforts to address the pressing issue
                of feather waste accumulation and pollution. While our project
                has the potential to impact multiple SDGs, we have honed in on a
                select few that align most closely with our mission. Our journey
                has been one of collaboration and learning. We've engaged with a
                diverse range of stakeholders, from the common man to experts in
                the field, whose valuable insights have shaped our project.
                Together, we're working to develop a solution that's not only
                effective but also environmentally responsible and sustainable
                in the long term. In every step we take, we remain committed to
                our vision of leaving a positive mark on the world, one feather
                at a time.
              </>
            }
          />
        }
      />
    </main>
  </div>
);

export default HumanPractices;
