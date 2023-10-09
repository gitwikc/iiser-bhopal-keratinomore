import * as React from "react";
import Paragraph from "../../../../components/layout/Paragraph";
import { Link } from "react-router-dom";

const DesignExecution: React.FC = () => {
  return (
    <div className="DesignExecution">
      <Paragraph
        hierarchy={0}
        title=""
        content={
          <>
            Physical and chemical methods, such as incineration, steam-pressure
            treatments, and acid or alkali hydrolysis, do not meet these
            criteria. The most promising alternative approaches involve
            biodegradation using keratinases or bacteria. Numerous
            feather-degrading bacteria (FDB) have been isolated from various
            genera, including Bacillus, Staphylococcus, Enterococcus,
            Streptomyces, and Pseudomonas sp., among others. However, most
            feather-degrading bacteria (FDB) require ≥ 5–6 days to completely
            degrade 1% feather-containing medium, which is too slow for
            industrial applications. To design a more efficient feather
            degradation system, it is essential to understand the structural
            properties of feathers that make them difficult to degrade. Feathers
            consist of almost 80–90% pure β-keratin, which is insoluble and
            undegradable by most proteolytic enzymes. The mechanical stability
            of feathers and their resistance to proteolytic digestion are
            consequences of the tight packing of the protein and the extensive
            formation of disulfide bonds in cysteine bridges. Therefore, an
            efficient feather degradation system must be able to cleave both the
            disulfide bonds and the protein chains in keratin.
          </>
        }
      />

      <Paragraph
        hierarchy={0}
        title="Dr. Aasheesh Srivastava"
        content={
          <>
            Through literature, we understood the thiolysis mechanism in
            microbial fermentation. However, due to the gaps in our knowledge,
            we approached Dr. Srivastava from the Chemistry Department of IISER
            Bhopal. Dr. Srivastava helped us to understand the L-cysteine
            metabolic pathway, which is activated during the microbial
            degradation of keratin.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Chandan Sahi"
        content={
          <>
            After gaining a complete understanding of the keratin degradation
            mechanism, consisting of sulfitolysis and proteolysis, the next step
            was to design our system. We approached Dr. Sahi, as we needed more
            experience in this area. We were under the assumption that we would
            need to purify the membrane protein from the pathway. However, Dr.
            Sahi informed us that purification of the membrane protein would not
            be necessary and that we could characterise it in vivo. He also
            suggested cloning with E. coli and then transforming the isolated
            plasmid into B. subtilis. He was the first person to advise us to
            perform feather degradation in a fermentor. Dr. Sahi's inputs and
            advice helped shape our project's direction in its developmental
            stages.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Himanshu Kumar"
        content={
          <>
            When we pitched our project idea to Dr. Kumar, we received important
            feedback to look into the stoichiometry of the bacteria in our
            consortium. He emphasised on the importance of this in the context
            of our project due to the two pathways involved in keratin
            degradation. This was something we followed up in a subsequent
            meeting with Dr. Cini Varghese from ICAR - Indian Agricultural
            Statistics Research Institute.
          </>
        }
      />
      <Paragraph hierarchy={0} title="Dr. Cini Varghese" content={<></>} />
      <Paragraph hierarchy={0} title="Dr. Anand Krishnan" content={<></>} />
      <Paragraph hierarchy={0} title="Mr. Anup Biswal" content={<></>} />
      <Paragraph hierarchy={0} title="Mr. Priti Ranjan Sahoo" content={<></>} />
      <Paragraph hierarchy={0} title="Mr. Malhar Atre" content={<></>} />
      <Paragraph
        hierarchy={0}
        title="Dr. Radhakrishna Sahu"
        content={
          <>
            Through the "Understanding" part of our cycle, we understood from
            the local chicken retailers that blood is stuck to the feathers
            after manual de-feathering. We wanted to design our pretreatment to
            minimise transmission of bacteria through the blood and feathers. We
            consulted Dr. Sahu, regarding the same. Dr. Sahu informed us that
            blood, while acting as a fomite, can lead to the transmission of
            Salmonella sp., Escherichia coli, and Campylobacter. But since these
            are mesophilic bacteria, autoclaving the feathers at 120°C will be
            enough to rid them of these unwanted bacteria.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Lavanya Bhagavatula"
        content={
          <>
            Dr. Bhagavatula, the founder and CEO of Anvaya Biotech, has also
            been a part of the Mentors’ Network at After iGEM. Her continued
            feedback and inputs on our project and its execution led us to
            explore newer ideas and avenues. She gave us the idea to look into
            using our system to degrade other forms of keratin. This led us to
            explore the problem of drain clogging from hair, which is a
            widespread public health issue. Another suggestion given by her was
            to look into the feasibility of making fermentors suitable for use
            in small-scale chicken retail shops in order to minimise the
            emissions from the transport of feathers from these shops and to
            dispose of them right at their source.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Gurudas Nulkar"
        content={
          <>
            After we proposed this idea, Dr. Nulkar thought that while these
            small fermentors will decrease emissions, it would not be feasible
            since many chicken shops might lack infrastructure for the proper
            functioning of the fermentors. Owners will have no direct uses for
            the hydrolysate and will not even be able to benefit monetarily from
            its sale as the hydrolysate will need post-processing before making
            any sellable product.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Pankaj Kumar"
        content={
          <>
            To discuss the scale of emissions from transport, we went back to
            Dr. Kumar, whom we had consulted during the understanding cycle. Dr.
            Kumar emphasised that the feathers are being transported from its
            source to another location even in the current methods. He told us
            our proposed method of feather degradation will be much more
            sustainable than the existing methods, even after considering the
            transportation emissions
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Sankar Chakma"
        content={
          <>
            Upon realising the need for a fermentor or bioreactor in our feather
            degradation process, we consulted with Dr. Sankar Chakma, an
            Assistant Professor in the Chemical Engineering Department at IISER
            Bhopal. Dr. Chakma provided invaluable insights into the essential
            features of our fermentor. Through these discussions, we decided to
            design a small fermentor which would eventually help us in
            scaling-up to a more extensive system. Inspired by Dr. Bhagavatula’s
            suggestion, we explored the possibility of applying our system to
            tackle drain clogging caused by hair. Dr. Chakma advised that we
            could incorporate a device within pipes or sinks for this
            application. However, after in-depth discussions and thorough
            literature review, we decided against pursuing this avenue due to
            feasibility constraints. For more information, visit our{" "}
            <Link to="/hardware">
              <span className="text-primary-1 font-semibold">Hardware</span>
            </Link>{" "}
            page.
          </>
        }
      />

      <div className="my-auto h-[0.1rem] w-full bg-primary-2 mt-6"></div>
      <Paragraph
        hierarchy={0}
        title=""
        content={
          <>
            We knew from literature that the hydrolysate obtained after the
            degradation of feathers contains free amino acids, peptides, and
            naturally occurring antioxidants. Hence, there are potential
            applications of the hydrolysate as an animal feed supplement and
            organic fertiliser, among many others.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Debasis Nayak"
        content={
          <>
            Initially, we were considering using the hydrolysate as a poultry
            feed supplement to achieve a circular economy through our project.
            Our PI, Dr. Debasis Nayak, told us to look into the ethical issues
            associated with this. Later, we found literature saying that there
            are several problems associated with improper and unregulated use of
            rendered animal products. Hence, there was a ban on the use of
            animal byproducts as feed materials, pet foods, soil improvers, and
            laboratory reagents. This ban was also partially lifted, allowing
            the use of processed proteins from the poultry industry as pig feed.{" "}
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Jaydip Rokade"
        content={
          <>
            We consulted Dr. Jaydip Rokade from ICAR-Central Avian Research
            Institute on the same. He told us that FSSAI has no regulations on
            using feed produced from chicken feathers. However, due to ethical
            perceptions of the public, it is not commonly used for poultry. But
            it can be used in cattle, fishes, or other animals.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Sudhanya Nath"
        content={
          <>
            Further, we had a meeting with Dr. Nath to discuss the feasibility
            of converting the feather hydrolysate into a feed supplement. Dr.
            Nath felt it would provide an economical alternative to the
            currently used protein sources. She also emphasised the importance
            of knowing the exact amino acid composition of the hydrolysate
            before moving forward.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Shyam Kumar Masakapalli"
        content={
          <>
            To discuss this further, we had a meeting with Dr. Masakapalli, who
            suggested we look into directly selling amino acids from our
            hydrolysate. But again, for selling the amino acids, we will need
            the composition of our hydrolysate.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Dr. Ankur Gupta"
        content={
          <>
            Dr. Gupta also stressed the importance of knowing what our
            hydrolysate consists of, apart from the free amino acids. The
            hydrolysate may contain some undegraded feathers, peptides, and
            bacterial proteins. Knowing what exists along with the free amino
            acids will make it easier to devise a method for separating the
            contents.
          </>
        }
      />
      <Paragraph
        hierarchy={0}
        title="Life Science Start-up Summit 2023"
        content={
          <>
            Later on, we also pitched our project and its prospective
            applications at the Life Science Start-up Summit 2023, held at the
            Institute of Life Sciences, Bhubaneshwar. Through the summit, we had
            the opportunity to gain insights from academicians and entrepreneurs
            from various fields. The consensus of the feedback we received was
            that if we wanted to sell amino acids directly, we would need to
            determine the major amino acids in our hydrolysate. All other
            commercial applications will also rely heavily on that information.
            More details can be found on our{" "}
            <Link to="/hardware">
              <span className="text-primary-1 font-semibold">
                Entrepreneurship
              </span>
            </Link>{" "}
            page.
          </>
        }
      />
      <Paragraph hierarchy={0} title="Conclusion" content={<>Daal denge</>} />
    </div>
  );
};

export default DesignExecution;
