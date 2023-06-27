import { create } from "zustand";

export type Reference = {
  text: string;
  href?: string;
};

export const referencesList: Reference[] = [
  {
    // Ref 0
    text: "USDA. (2023) Livestock and Poultry: World Markets and Trade",
    href: "https://apps.fas.usda.gov/psdonline/circulars/livestock_poultry.pdf",
  },
  {
    // Ref 1
    text: "ResearchGate (2017). Feather weight as a proportion of the empty body weight of male and female broiler chickens",
    href: "https://www.researchgate.net/figure/Feather-weight-as-a-proportion-of-the-empty-body-weight-of-male-and-female-broiler_fig3_320414725",
  },
  {
    // Ref 2
    text: "Plumbing Manufacturers International. (2021). Hair clogs: A serious issue for homeowners and plumbers",
    href: "https://www.safeplumbing.org/news/hair-clogs-a-serious-issue-for-homeowners-and-plumbers",
  },
  {
    // Ref 3
    text: "Jawed, K., Yazdani, S. S., & Yazdani, S. S. (2016). An Insight into the Emerging Exotic\
    Enzymes from Extremophiles for the Waste Biomass Valorization. BioMed Research\
    International, 2016, 1-18.",
  },
  {
    // Ref 4
    text: "Mitsuiki, S., Ichida, E., Watanabe, T., Ito, M., Kikuchi, T., Kawaradani, M., & Suzuki, H. (2020).\
    Bioconversion of Waste Keratin Substrates into Soluble Peptides by Enzymatic Reaction.\
    Journal of Bioscience and Bioengineering, 129(2), 165-170",
  },
  {
    // Ref 5
    text: "Ganiyu, S. A., Ogunjimi, L. A. O., & Oyewole, O. A. (2019). Waste to Energy Conversion\
    Technologies and Their Environmental Implications: A Review. Journal of Environmental\
    Science and Management, 22(4), 51-68.",
  },
  {
    // Ref 6
    text: "Tamreihao K, Mukherjee S, Khunjamayum R, et al. Feather degradation by keratinolytic bacteria\
    and biofertilizing potential for sustainable agricultural production. Journal of Basic Microbiology.\
    2019 Jan;59(1):4-13. DOI: 10.1002/jobm.201800434. PMID: 30353928.",
  },
  {
    // Ref 7
    text: "A. Grazziotin, F.A. Pimentel, E.V. de Jong, A. Brandelli,\
    Nutritional improvement of feather protein by treatment with microbial keratinase,\
    Animal Feed Science and Technology, Volume 126, Issues 1–2, 2006",
    href: "https://doi.org/10.1016/j.anifeedsci.2005.06.002",
  },
  {
    // Ref 8
    text: "Jingwen Qiu, Casper Wilkens, Kristian Barrett, Anne S. Meyer,\
    Microbial enzymes catalysing keratin degradation: Classification, structure, function,\
    Biotechnology Advances, Volume 44, 2020.",
  },
  {
    // Ref 9
    text: "Team Colegio FDR Peru - iGEM 2017",
    href: "https://2017.igem.org/Team:ColegioFDR_Peru",
  },
  {
    // Ref 10
    text: "Toor, M., Jin, H., Dai, X., Lv, Y., Liu, Q., Li, X., & Ren, X. (2017). Degradation of fat, oil, and\
    grease (FOG) waste in sewer collection systems using sulfide-based chemical agents. Journal\
    of Environmental Sciences, 53, 292-299.",
  },
  {
    // Ref 11
    text: `Laumbach, R. J., Kipen, H. M., Ko, S., Kelly-McNeil, K., Cepeda, C., & Pettit, A. (2016). A
    controlled trial of acute effects of human exposure to traffic particles on pulmonary oxidative
    stress and heart rate variability. Particle and Fibre Toxicology, 13(1), 17`,
  },
  {
    // Ref 12
    text: `Baraka, A., Morsy, E. A., & Hassan, A. F. (2019). Risk Assessment and Remediation Options for
    Chemical Spills in Wastewater Treatment Plants. Journal of Hazardous, Toxic, and Radioactive
    Waste, 23(2), 04019005`,
  },
  {
    // Ref 13
    text: `Bergendahl, J. A., Saville, B. A., & Jones, L. L. (2019). Comparison of Chemical and Biological
    Drain Cleaners. Journal of Chemical Education, 96(8), 1617-1620.`,
  },
  {
    // Ref 14
    text: `Shen, N., Yang, M., Xie, C. et al. Isolation and identification of a feather degrading Bacillus
    tropicus strain Gxun-17 from marine environment and its enzyme characteristics. BMC
    Biotechnol 22, 11 (2022)`,
  },
];

type HighlightRefStore = {
  index: number;
  highlightIndex: (index: number) => void;
  resetHighlight: () => void;
};

export const useHighlightRefStore = create<HighlightRefStore>((set) => ({
  index: -1,
  highlightIndex: (index: number) => set(() => ({ index })),
  resetHighlight: () => set(() => ({ index: -1 })),
}));
