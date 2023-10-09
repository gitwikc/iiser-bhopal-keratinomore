import HeroSection from "../../components/layout/HeroSection";
import "./Attribution.css";

const Attributions = () => (
  <div className="Attributions">
    <HeroSection
      title={
        <>
          <span>Attributions</span>
        </>
      }
    />

    <main className="iframe-div">
    < iframe id="igem-attribution-form" src="https://attributions.igem.org?team=IISER-Bhopal&year=2023">

    </iframe>
    
    </main>
  </div>
);

export default Attributions;
