import HeroSection from "../../components/layout/HeroSection";
import Paragraph from "../../components/layout/Paragraph";
import Citation from "../../components/ui/Citation";
import Reference from "../../components/ui/Reference";
import { referencesList, useHighlightRefStore } from "../../data/References";
import "./Description.css";
import DescriptionBackground from "/hero-bg/description.jpg";

const Description = () => {
  const isHighlighted = useHighlightRefStore(
    (state) => (index: number) => state.index === index
  );

  return (
    <div className="Description">
      <HeroSection
        imageURL={DescriptionBackground}
        title="Description"
        description="Get to know the project, its inspirations and goals."
        imageCredit={
          <>
            Photo by{" "}
            <a href="https://unsplash.com/@swimstaralex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Alexander Sinn
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/photos/DX5r6BNoWVE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </>
        }
      />

      <div className="description__content">
        <Paragraph
          title="Introduction"
          hierarchy={0}
          content={
            <Paragraph
              title="Keratinous Waste Management: Challenges and Environmental Implications"
              hierarchy={1}
              content={
                <>
                  <p>
                    Keratinous waste, particularly hair and feathers, poses a
                    significant challenge in terms of efficient and sustainable
                    management. Keratin is one of the most abundant biopolymers.
                    Its recalcitrant nature and limited existing solutions for
                    its degradation complicate waste disposal.
                  </p>
                  <Paragraph
                    title="Feather Waste in the Poultry Industry"
                    hierarchy={2}
                    content={
                      <>
                        <p>
                          In the poultry industry, feather waste is a major
                          concern. With the global demand for poultry products
                          rising steadily, the volume of feather waste generated
                          has increased substantially. In 2023 alone, global
                          chicken meat production is projected to be
                          approximately 103.4 million metric tons{" "}
                          <Citation citeNumber={0}>(USDA, 2023)</Citation>,
                          putting the total feather waste generated at 8.38
                          million tons (
                          <Citation citeNumber={0}>USDA 2023</Citation>,{" "}
                          <Citation citeNumber={1}>NCC, 2022;</Citation>{" "}
                          <Citation citeNumber={2}>ResearchGate 2017</Citation>
                          ). The issue of feather waste largely goes unnoticed
                          and receives limited attention, resulting in a lack of
                          awareness and insufficient measures for its
                          management. Increased recognition and action are
                          crucial to address this pressing environmental
                          problem.
                        </p>
                        <p>
                          The current practices for managing feather waste are
                          largely unsustainable. Conventional methods such as
                          incineration release harmful gases like PAHs, NOx, and
                          SO2 into the atmosphere, contributing to air pollution
                          and climate change. Landfilling leads to waste
                          accumulation and potential soil and groundwater
                          contamination{" "}
                          <Citation citeNumber={5}>
                            (Ganiyu et al., 2019).
                          </Citation>{" "}
                          Chemical treatments for feather waste involve harsh
                          alkaline substances, posing risks to human health and
                          the environment. Additionally, the improper management
                          of discarded feathers can contribute to the spread of
                          diseases like Avian Flu, which has led to the killing
                          of approximately 140 million farmed birds since
                          October 2022, and Campylobacter infections with almost
                          130,000 reported cases in the EU in 2021{" "}
                          <Citation citeNumber={9}>(iGEM FDR, 2017).</Citation>{" "}
                          Rodents like rats and mice thriving in poultry houses
                          carry pathogens like salmonella, chicken anaemia
                          virus, and infectious bursal disease virus which poses
                          further risks{" "}
                          <Citation citeNumber={9}>(iGEM FDR, 2017).</Citation>.
                        </p>
                      </>
                    }
                  />
                  <Paragraph
                    title="Hair Clogging: A Widespread Problem"
                    hierarchy={2}
                    content={
                      <>
                        <p>
                          Hair, like feathers, is an abundant form of keratin.
                          Hair clogging is a significant and widespread problem
                          with millions of clogged drains reported each year
                          <Citation citeNumber={2}>
                            (Plumbing Manufacturers International, 2021).
                          </Citation>{" "}
                          While there are no precise statistics available on the
                          exact magnitude of the problem, it is widely
                          recognized as a common issue in households, commercial
                          establishments, and public facilities. Due to its
                          fibrous nature, hair can easily accumulate and
                          intertwine with other debris, leading to the formation
                          of clogs and blockages in pipes and drains.
                        </p>
                        <p>
                          Currently used chemical drain cleaners, such as sodium
                          hydroxide (lye) and sulfuric acid, present significant
                          disadvantages. These harsh substances can corrode
                          pipes, release toxic fumes that pose health risks upon
                          contact or inhalation, contribute to water pollution
                          by introducing harmful chemicals such as chlorine,
                          sodium hypochlorite, and sodium hydroxide into
                          wastewater, and exhibit limited effectiveness in
                          removing persistent clogs, especially in cases of hair
                          blockages{" "}
                          <Citation citeNumber={13}>
                            (Bergendahl et al., 2019; Toor et al., 2017;
                            Laumbach et al 2016; Baraka et al., 2019).
                          </Citation>
                        </p>
                      </>
                    }
                  />
                </>
              }
            />
          }
        />

        <Paragraph
          title="Understanding Keratin's Structure and Resilience"
          hierarchy={0}
          content={
            <>
              <Paragraph
                title="Analysis of Keratin's Structure"
                hierarchy={1}
                content={
                  <p>
                    To address these challenges, our project takes a
                    multi-faceted approach. Firstly, we have delved into
                    analysing keratin's structure and the resilient nature of
                    its disulfide bonds. Its two forms, α and β-keratin, are
                    insoluble and undegradable by most proteolytic enzymes.
                    Their mechanical stability and resistance to proteolytic
                    digestion are consequences of the tight packing of the
                    proteins. There is a high degree of crosslinking of the
                    polypeptide chain caused by extensive formation of
                    disulphide bonds in cysteine bridges. This grants keratin
                    immunity from action of proteolytic enzymes like trypsin and
                    pepsin <Citation citeNumber={8}>(Qiu et al 2020).</Citation>
                  </p>
                }
              />
            </>
          }
        />

        <Paragraph
          title="Developing Sustainable Solutions for Keratinous Waste Management"
          hierarchy={0}
          content={
            <>
              <Paragraph
                title="Bioconversion System for Feather Waste"
                hierarchy={1}
                content={
                  <>
                    <Paragraph
                      title="Studying keratinolytic bacteria and their enzymatic pathways"
                      hierarchy={2}
                      content={
                        <>
                          Through extensive literature review and analysis of
                          wild-type keratinolytic bacteria, we have gained
                          insights into the mechanisms involved in breaking down
                          keratin. However, the fragmented nature of the
                          available literature motivated us to develop a
                          conclusive model for the degradation pathway.
                        </>
                      }
                    />
                    <Paragraph
                      title="Utilizing fungal and bacterial enzymes, with a focus on disulfide bond reduction"
                      hierarchy={2}
                      content={
                        <>
                          By identifying fungal and bacterial enzymes that play
                          essential roles in the feather degradation mechanism,
                          we aim to create an efficient bioconversion system
                          through experimentation and the optimal blend of these
                          enzymes, with an emphasis on disulphide bond reduction{" "}
                          <Citation citeNumber={3}>
                            (Jawed et al., 2016; Mitsuiki et al., 2020).
                          </Citation>{" "}
                          This system will be designed with Bacillus subtilis
                          168 as the expression chassis since it already
                          possesses some feather degrading features{" "}
                          <Citation citeNumber={14}>
                            (Shen et. al., 2022).
                          </Citation>{" "}
                          We aim to develop plasmid and genome integration-based
                          expression systems and quantitatively assess both to
                          identify the optimal one.
                        </>
                      }
                    />
                  </>
                }
              />
              <Paragraph
                title="Localized Approach, Resource Recovery and Safety"
                hierarchy={1}
                content={
                  <>
                    <p>
                      Our project aims to bridge the gap between existing
                      inefficient and polluting methods, and the need for a more
                      sustainable approach.
                    </p>
                    <p>
                      We plan to develop small-scale fermentors that can be
                      deployed near chicken shops and poultry farms, focusing on
                      high-density clusters, thereby targeting feather waste at
                      its source. This localised approach ensures the
                      feasibility of our project, especially in areas with a
                      high density of these establishments. The resulting
                      hydrolysate, containing valuable peptides, amino acids,
                      and natural antioxidants, can be utilised as a protein
                      feed supplement and potent biofertilizer{" "}
                      <Citation citeNumber={7}>
                        (A. Grazziotin et al., 2006; Tamreihao K et al., 2018).
                      </Citation>{" "}
                      We aim to tackle the problem of hair clogging in drains by
                      formulating a solution that replaces the need for harmful
                      chemical treatments. We will prioritise biosafety and
                      ensure minimal risks to human health and environment
                      through our project's biocontainment strategies
                    </p>
                  </>
                }
              />
            </>
          }
        />
        <Paragraph
          title="Our Goal"
          hierarchy={0}
          content={
            <>
              <Paragraph
                title="Unify Keratin Waste Management"
                hierarchy={1}
                content={
                  <>
                    Our goal is to unify keratin waste management through the
                    use of the same essential enzymatic systems. Furthermore,
                    our project aims to raise awareness about the environmental
                    consequences of keratinous waste.
                  </>
                }
              />
              <Paragraph
                title="Collaborative Stakeholder Engagement"
                hierarchy={1}
                content={
                  <>
                    Engaging stakeholders such as poultry farm and chicken shop
                    owners, local communities, and governing bodies is crucial
                    to encouraging responsible feather and hair waste management
                    practices and fostering a culture of sustainability.
                    Collaboration with experts in the field and integrating
                    input from all stakeholders and communities at large will
                    help establish sensible keratinous waste management
                    practices.
                  </>
                }
              />

              <Paragraph
                title="Summary"
                hierarchy={1}
                content={
                  <>
                    To summarise, our comprehensive approach addresses the
                    challenge of efficient and sustainable keratinous waste
                    management, with a specific focus on feathers and hair. By
                    incorporating scientific understanding, microbial methods,
                    practical solutions, and an emphasis on environmental
                    sustainability, our project strives to make significant
                    strides toward a cleaner and more sustainable future.
                  </>
                }
              />
            </>
          }
        />
      </div>

      <div className="description__references">
        <Paragraph
          title="References"
          hierarchy={0}
          content={
            <>
              <ul className="references">
                {referencesList.map((reference, i) => (
                  <li
                    className={`${isHighlighted(i) && "highlighted"}`}
                    key={i}
                    id={`ref__${i}`}
                  >
                    <Reference refNumber={i} href={reference.href}>
                      {reference.text}
                    </Reference>
                  </li>
                ))}
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Description;
