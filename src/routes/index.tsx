import "./index.css";
import Problem, { ProblemLayout } from "../components/layout/Problem";
import { ColorName } from "../data/colors";
import { GiChicken, GiSandsOfTime } from "react-icons/gi";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <section className="brand">
        <img
          className="-translate-y-20"
          src="https://static.igem.wiki/teams/4958/wiki/homepage/banner.png"
        />
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
      <Problem
        color={ColorName.SECONDARY}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={<GiSandsOfTime size={192} />}
        content={<>{/* <img src="./IMG-0517.png" />/ */}</>}
      />

      <section className="w-screen flex gap-4 justify-evenly">
        <Link to="/description">
          <img
            className="w-48 h-48"
            src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/factory.gif"
          />
        </Link>
        <Link to="/description">
          <img
            className="w-48 h-48"
            src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/chem.gif"
          />
        </Link>
        <Link to="/description">
          <img
            className="w-48 h-48"
            src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/landfill.gif"
          />
        </Link>
        <Link to="/description">
          <img
            className="w-48 h-48"
            src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/inci.gif"
          />
        </Link>
      </section>
    </div>
  );
};

export default Home;
