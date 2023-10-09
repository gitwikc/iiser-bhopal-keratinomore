import * as React from "react";
import Paragraph from "../../../../components/layout/Paragraph";

const DesignExecution: React.FC = () => {
  return (
    <div className="DesignExecution">
      <p>
        Physical and chemical methods, such as incineration, steam-pressure
        treatments, and acid or alkali hydrolysis, do not meet these criteria.
        The most promising alternative approaches involve biodegradation using
        keratinases or bacteria. Numerous feather-degrading bacteria (FDB) have
        been isolated from various genera, including Bacillus, Staphylococcus,
        Enterococcus, Streptomyces, and Pseudomonas sp., among others. However,
        most feather-degrading bacteria (FDB) require ≥ 5–6 days to completely
        degrade 1% feather-containing medium, which is too slow for industrial
        applications. To design a more efficient feather degradation system, it
        is essential to understand the structural properties of feathers that
        make them difficult to degrade. Feathers consist of almost 80–90% pure
        β-keratin, which is insoluble and undegradable by most proteolytic
        enzymes. The mechanical stability of feathers and their resistance to
        proteolytic digestion are consequences of the tight packing of the
        protein and the extensive formation of disulfide bonds in cysteine
        bridges. Therefore, an efficient feather degradation system must be able
        to cleave both the disulfide bonds and the protein chains in keratin.
      </p>

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
    </div>
  );
};

export default DesignExecution;
