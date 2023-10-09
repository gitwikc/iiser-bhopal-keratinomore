import * as React from "react";
import HeroSection from "../../../components/layout/HeroSection";
import Paragraph from "../../../components/layout/Paragraph";
import SelectTabButton from "../../../components/ui/Tabs/SelectTabButton";

import "./index.css";
import Tabs from "../../../components/ui/Tabs";
import Understanding from "./tabs/Understanding";
import DesignExecution from "./tabs/DesignExecution";

const Integrated: React.FC = () => {
  return (
    <div className="Integrated">
      <HeroSection
        title={
          <>
            <span>Integrated</span>
            <span>Human</span>
            <span>Practices</span>
          </>
        }
      />

      <main>
        <Paragraph
          hierarchy={0}
          title="Introduction"
          content={
            <>
              <p>
                Feather waste often goes unnoticed because it's commonly assumed
                to be inherently biodegradable, akin to something as organic as
                a banana peel. However, the reality is far more complex.
                Feathers, with their intricate, crosslinked keratinous
                structure, take around 5-7 years to decompose naturally.
              </p>
              <p>
                Despite the severity of the poultry feather waste problem, it
                needs to be better understood by the public and by many
                policymakers. This is due in part to the unapparent nature of
                the problem. Poultry feather waste is often disposed of in
                landfills or incinerated, so it is not visible to the public.
                Additionally, there needs to be more awareness about the
                environmental and economic impacts of poultry feather waste.
              </p>
              <p>
                Our project aims to address this problem by raising awareness
                about it and developing a sustainable solution using synthetic
                biology. We are designing and engineering microbes that can
                efficiently degrade feathers into free amino acids and peptides.
                These products can then be used as ingredients in animal feed,
                fertilisers, or other industrial products.
              </p>
              <p>
                We believe that our HP work is essential to the success of our
                overall project. By understanding the problem and raising
                awareness about it, we can increase the likelihood that our
                solution will be adopted by industry and the public.
              </p>
              <p>
                Our journey began from a fundamental realisation: that feather
                waste is a problem largely unrecognised due to a lack of
                awareness. We understood that to tackle this issue sustainably,
                we needed to bridge the gap between this underappreciated
                problem and a viable solution.
              </p>
            </>
          }
        />

        <Tabs
          tabButtons={[
            {
              name: "Timeline",
              element: <>Timeline</>,
            },
            {
              name: "Understanding",
              element: <Understanding />,
            },
            {
              name: "Design & Execution",
              element: <DesignExecution />,
            },
            {
              name: "Closing the Loop",
              element: <>Closing the Loop</>,
            },
            {
              name: "Spreading Awareness",
              element: <>Spreading Awareness</>,
            },
          ]}
        />
      </main>
    </div>
  );
};

export default Integrated;
