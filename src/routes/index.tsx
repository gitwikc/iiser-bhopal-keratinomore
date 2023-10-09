import "./index.css";
import Problem, { ProblemLayout } from "../components/layout/Problem";
import { ColorName } from "../data/colors";
import { GiChicken } from "react-icons/gi";

import { Link } from "react-router-dom";
import WorldFeather from "./home/WorldFeather";
import RegionFeather from "./home/RegionFeather";

const Home = () => {
  return (
    <div className="Home">
      <section className="brand">
        <img
          className="-translate-y-20 saturate-0"
          src="https://static.igem.wiki/teams/4958/wiki/homepage/banner.png"
        />
      </section>

      {/* Problem statement story */}
      <Problem
        color={ColorName.PRIMARY1}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={null}
        content={
          <>
            <div className="flex flex-col items-center gap-8 text-6xl">
              <GiChicken size={200} />
              <span className="text-center">
                Chicken on your plate tonight?
              </span>
              <span>Korma? Stir-Fry? Biryani?</span>
            </div>
          </>
        }
      />
      <Problem
        color={ColorName.PRIMARY2}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={
          <>
            <span className="flex flex-col gap-5 items-center mr-16">
              <span className="text-center text-3xl">
                Global poultry consumption per capita increased from 9.8kg in
                2000 to
                <br /> 14.8kg in 2019.
              </span>
              <span className="text-center text-3xl">
                In 2023, the global chicken meat production is projected to be
                <br />
                103.4 million metric tons.
              </span>
            </span>
          </>
        }
        content={
          <>
            <RegionFeather />
          </>
        }
      />
      <Problem
        color={ColorName.PRIMARY1}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={
          <img
            src="https://static.igem.wiki/teams/4958/wiki/homepage/chicken-8.gif"
            alt="Chicken 8%"
          />
        }
        content={
          <>
            <span className="text-6xl">
              Feathers make about 8% of the body weight of chicken.{" "}
            </span>
          </>
        }
      />
      <Problem
        color={ColorName.PRIMARY2}
        layout={ProblemLayout.GRAPHIC_LEFT}
        graphic={
          <>
            <span className="text-5xl mr-8">
              This puts the total feather waste generated in 2023 alone at 8.38
              million metric tons
            </span>
          </>
        }
        content={
          <>
            <WorldFeather />
          </>
        }
      />
      <Problem
        color={ColorName.PRIMARY1}
        layout={ProblemLayout.GRAPHIC_RIGHT}
        graphic={
          <>
            <img
              src="https://static.igem.wiki/teams/4958/wiki/homepage/feather-anim.gif"
              alt="Feather Disulphide animation"
            />
          </>
        }
        content={
          <>
            <div className="flex flex-col gap-5 w-4/5">
              <span className="text-4xl">What makes this a problem?</span>
              <span className="text-3xl">
                Feathers consist of predominantly α-keratin and <br />
                β-keratin. Extensive disulphide bonds and non-covalent
                interactions give feathers a high resistance to proteolytic
                microorganisms, chemicals, and mechanical stress.
              </span>
            </div>
          </>
        }
      />

      <section className="flex flex-col gap-12">
        <span className="font-serif font-semibold text-center text-3xl text-primary-1">
          Current methods for managing feather waste are highly inefficient and
          unsustainable
        </span>
        <section className="w-screen flex gap-4 justify-evenly">
          <Link className="flex flex-col gap-3 items-center" to="/description">
            <img
              className="w-48 h-48"
              src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/factory.gif"
            />
            <span className="text-xl text-primary-1 font-semibold">
              Steam Pressure Treatment
            </span>
          </Link>
          <Link className="flex flex-col gap-3 items-center" to="/description">
            <img
              className="w-48 h-48"
              src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/chem.gif"
            />
            <span className="text-xl text-primary-1 font-semibold">
              Chemical Hydrolysis
            </span>
          </Link>
          <Link className="flex flex-col gap-3 items-center" to="/description">
            <img
              className="w-48 h-48"
              src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/landfill.gif"
            />
            <span className="text-xl text-primary-1 font-semibold">
              Landfilling
            </span>
          </Link>
          <Link className="flex flex-col gap-3 items-center" to="/description">
            <img
              className="w-48 h-48"
              src="https://static.igem.wiki/teams/4958/wiki/cur-sol-icons/inci.gif"
            />
            <span className="text-xl text-primary-1 font-semibold">
              Incineration
            </span>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
