import "./Experiments.css";
import HeroSection from "../../components/layout/HeroSection";


const Experiments = () => <div className="Experiments">
    <HeroSection
      title={
        <>
          <span>Experiments</span>
        </>
      }
    />
    <main className="main-body">
    <h1 className="main-heading">Protocols</h1>
    <h2 className="secondary-heading">ISOLATION OF GENOMIC DNA</h2>
    <p>
    The isolation of genomic DNA of an organism involves cell lysis, protein removal, and precipitation of DNA, resulting in a pure genomic DNA sample ready for various molecular biology applications such as PCR, sequencing, and genetic analysis.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab1" />
  <label className="accordion-label" htmlFor="tab1">B.subtilis 168</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Inoculate 10 ml LB medium from a fresh overnight culture and incubate at 37°C in a shaker.</li>
    <li>At OD600 of 0.8-1.0 harvest cells by centrifugation (10 min, 5000 rpm, RT).
</li>
<li>Resuspend cell pellet in 400 µl TEN and transfer the solution to a 2 ml eppendorf cup.</li>
<li>Add 20 µl lysozyme and incubate for 20 min at 37°C.</li>
<li>Add 2 µl RNase and incubate for 3 min 65°C.</li>
<li>Add 40 µl SDS, small amount (covering the tip of a spatula) of proteinase K and 550 µl TEN*, mix and incubate for 2 hours at 60°C.</li>
<li> Add 900 µl phenol (equilibrated with TE buffer, pH 7.5-8.0) and mix well by inverting the tube.</li>
<li>Centrifuge (5 min, 13000 rpm, RT) and transfer the upper phase into a new 1.5 ml eppendorf cup.</li>
<li>Repeat the extraction once with phenol and twice with chloroform:isoamylalcohol (24:1)</li>
<li>
Transfer the aqueous phase to 10 ml -20°C cold ethanol in a test tube • Coil up the precipitated DNA with the bended tip of a Pasteur pipette
</li>
<li>
Air dry the DNA • Dissolve DNA in 100 µl TEN* overnight at 4°C
</li>
<li>
For PCR, dilute the chromosomal DNA 1:50
</li>

   </ul>
   <br></br>
   <h3>Buffers:</h3>
   TEN<br/>
10 mM Tris/HCl pH 8.0 <br/>
10 mM EDTA <br/>
150 mM NaCl <br/>
<br/>
TEN* <br/>
10 mM Tris/HCl pH 8.0 <br/>
1 mM EDTA <br/>
50 mM NaCl <br/>
<br/><br/>
Lysozyme 20 mg/ml <br/>
RNase A 20 mg/ml <br/>
SDS 10 % (w/v)<br/>
<br/>
  </div>
</div>
<br/><br/>
<h2 className="secondary-heading">PCR</h2>
    <p>
    Polymerase Chain Reaction (PCR), involving cycle of denaturation, annealing, and extension used to amplify and replicate a specific DNA sequence using DNA primers and a heat-stable DNA polymerase enzyme.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab2" />
  <label className="accordion-label" htmlFor="tab2">With PHUSION</label>
  <div className="accordion-content">
   
  </div>
</div>
    </main>
    
</div>;

export default Experiments;