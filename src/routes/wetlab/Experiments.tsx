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
    <h2 className="secondary-heading">Liquid Growth media</h2>
    <p>
    Description to be added.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab14" />
  <label className="accordion-label" htmlFor="tab14">B.subtilis 168</label>
  <div className="accordion-content">
    
<strong>Minimal S7 Media</strong><br/>
<br/>

<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ddH2O</td>
      <td>80.6 ml</td>
    </tr>
    <tr>
      <td>10X S750</td>
      <td>10 ml</td>
    </tr>
    <tr>
      <td>50% Glucose</td>
      <td>2 ml</td>
    </tr>
    <tr>
      <td>100X Metals</td>
      <td>1 ml</td>
    </tr>
    <tr>
      <td>10% (w/v) Glutamate-K</td>
      <td>1 ml</td>
    </tr>
    <tr>
      <td>10 mg/ml Tryptophan</td>
      <td>0.4 ml</td>
    </tr>
  </tbody>
</table>
<br/>
Mix well and sterilize by filtration, and store at 4°C. If each component is sterile, skip filtration.<br/><br/>
<ul className="protocol-list">
<li> 10X S750 (1L in ddH2O)</li>
</ul>
<br/>

<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MOPS (free acid)</td>
      <td>104.7 g</td>
    </tr>
    <tr>
      <td>(NH4)2SO4</td>
      <td>13.2 g</td>
    </tr>
    <tr>
      <td>KH2PO4</td>
      <td>6.8 g</td>
    </tr>
  </tbody>
</table>
<br/>
Bring pH up to 7.0 with KOH pellets. Sterilize by filtration, wrap in aluminum foil, and store at room temperature.
<br/><br/>

<ul className="protocol-list">
<li>Tryptophan 10 mg/ml</li>
</ul>
<br/>
<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tryptophan</td>
      <td>1 g</td>
    </tr>
    <tr>
      <td>ddH2O</td>
      <td>90 ml</td>
    </tr>
    <tr>
      <td>KOH 1M</td>
      <td>10 ml</td>
    </tr>
  </tbody>
</table>
<br/>
Sterilize by filtration, wrap in aluminum foil and store at 4°C. <br/>
<br/>
<ul className="protocol-list">
<li>100X Metals (100 ml in ddH2O)</li></ul>
<br/>
<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
      <th>Storage</th>
      <th>Sterilization</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1M MgCl2</td>
      <td>20 ml</td>
      <td>RT</td>
      <td>Autoclave</td>
    </tr>
    <tr>
      <td>0.5 M CaCl2</td>
      <td>14 ml</td>
      <td>RT</td>
      <td>Autoclave</td>
    </tr>
    <tr>
      <td>1M MnCl2</td>
      <td>0.5 ml</td>
      <td>-20°C</td>
      <td>Filtration</td>
    </tr>
    <tr>
      <td>10mM ZnCl2</td>
      <td>1 ml</td>
      <td>4°C</td>
      <td>Filtration</td>
    </tr>
    <tr>
      <td>2 mg/ml Thiamine-HCl</td>
      <td>5 ml</td>
      <td>4°C</td>
      <td>Filtration</td>
    </tr>
    <tr>
      <td>1N HCl</td>
      <td>0.2 ml</td>
      <td>RT</td>
      <td>-</td>
    </tr>
    <tr>
      <td>50mM FeCl2 (Add last)</td>
      <td>1 ml</td>
      <td>4°C</td>
      <td>Filtration</td>
    </tr>
    <tr>
      <td>ddH2O</td>
      <td>58.3 ml</td>
      <td>RT</td>
      <td>-</td>
    </tr>
  </tbody>
</table>
<br/>
RT= room Temperature <br/>
Sterilize by filtration, wrap in aluminum foil and store at 4°C.<br/><br/>

<ul className="protocol-list">
<li>10% (w/v) Glutamate-K
</li>
</ul><br/>
Prepare 10% glutamate in ddH2O, sterilize by autoclave and store at room temperature. <br/>
<strong>Note:</strong> Use the monopotassium salt monohydrate, not the anhydrous!<br/><br/>


<ul className="protocol-list">
<li>
50% Glucose  
</li>
</ul>
<br/>
<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dextrose anhydrous (D-Glucose)</td>
      <td>500 g</td>
    </tr>
    <tr>
      <td>ddH2O</td>
      <td>500 ml approx.</td>
    </tr>
  </tbody>
</table>
<br/>
Adjust volume to 1 L, autoclave. Mild heat helps dissolve glucose.


  </div>
</div>
<div className="accordion">
  <input type="checkbox" id="tab15" />
  <label className="accordion-label" htmlFor="tab15">E.coli</label>
  <div className="accordion-content">
    
<strong>LB Broth preparation</strong><br/>

<ul className="protocol-list">
<li>Measure 25 g of LB Broth powder in well calibrated weighing balance. 
</li>
<li>Dissolve it in 1 liter of distilled water. 
</li>
<li>Autoclave it for about 30 minutes to dissolve and sterilize it completely.</li>
<li>Let the mixture cool to room temperature to inoculate for bacterial growth.</li>
</ul>
  </div>
</div>
<br/>
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
<br/>
<h2 className="secondary-heading">PCR</h2>
    <p>
    Polymerase Chain Reaction (PCR), involving cycle of denaturation, annealing, and extension used to amplify and replicate a specific DNA sequence using DNA primers and a heat-stable DNA polymerase enzyme.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab2" />
  <label className="accordion-label" htmlFor="tab2">With PHUSION</label>
  <div className="accordion-content">
  
  <table>
  <thead>
    <tr>
      <th>S.no.</th>
      <th>Reagents</th>
      <th>Volume (total = 100 ul)</th>
      <th>Final Conc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>5X Phusion Buffer</td>
      <td>20 ul</td>
      <td>1X</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10 mM dNTPs</td>
      <td>3 ul</td>
      <td>200 uM</td>
    </tr>
    <tr>
      <td>3</td>
      <td>10 uM Forward primer</td>
      <td>2 ul</td>
      <td>200 nM</td>
    </tr>
    <tr>
      <td>4</td>
      <td>10 uM Reverse primer</td>
      <td>2 ul</td>
      <td>200 nM</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Template DNA</td>
      <td>1 ul</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>DMSO</td>
      <td>3 ul</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Phusion DNA Polymerase</td>
      <td>0.5 ul</td>
      <td></td>
    </tr>
    <tr>
      <td>8</td>
      <td>Autoclaved MilliQ water</td>
      <td>68.5 ul</td>
      <td></td>
    </tr>
  </tbody>
</table>
<br/><br/>
    <table>
      <thead>
        <tr>
          <th>Step</th>
          <th>Temp(°C)</th>
          <th>Time</th>
          <th>No. of cycles</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Initial Denaturation</td>
          <td>98</td>
          <td>2 min</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Denaturation</td>
          <td>98</td>
          <td>5-10 sec</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Primer Annealing</td>
          <td>45-68</td>
          <td>15-30 sec</td>
          <td>10</td>
        </tr>
        <tr>
          <td>Extension</td>
          <td>72</td>
          <td>15-30 sec per kb</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Final Extension</td>
          <td>72</td>
          <td>5-10 min</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Hold</td>
          <td>4</td>
          <td>∞</td>
          <td></td>
        </tr>
      </tbody>
    </table>
<br/>
  </div>
</div>
<div className="accordion">
  <input type="checkbox" id="tab3" />
  <label className="accordion-label" htmlFor="tab3">With TAQ POLYMERASE</label>
  <div className="accordion-content">
  
  <table>
  <thead>
    <tr>
      <th>S.No.</th>
      <th>Reagents</th>
      <th>Volume (total = 100 ul)</th>
      <th>Final Conc</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>10X Taq Buffer</td>
      <td>10 ul</td>
      <td>1X</td>
    </tr>
    <tr>
      <td>2</td>
      <td>10mM dNTPs</td>
      <td>2 ul</td>
      <td>200 uM</td>
    </tr>
    <tr>
      <td>3</td>
      <td>10uM Forward Primer</td>
      <td>2 ul</td>
      <td>200 nM</td>
    </tr>
    <tr>
      <td>4</td>
      <td>10uM Reverse Primer</td>
      <td>2 ul</td>
      <td>200 nM</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Template DNA</td>
      <td>0.25 ul</td>
      <td></td>
    </tr>
    <tr>
      <td>6</td>
      <td>Taq DNA Polymerase</td>
      <td>1 ul</td>
      <td></td>
    </tr>
    <tr>
      <td>7</td>
      <td>Autoclaved MilliQ water</td>
      <td>To 100 ul</td>
      <td></td>
    </tr>
  </tbody>
</table>

<br/><br/>
<table>
  <thead>
    <tr>
      <th>Step</th>
      <th>Temp(°C)</th>
      <th>Time</th>
      <th>No. of cycles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Initial Denaturation</td>
      <td>95</td>
      <td>30 sec</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Denaturation</td>
      <td>95</td>
      <td>45-68</td>
      <td>15-60 sec</td>
    </tr>
    <tr>
      <td>Primer Annealing</td>
      <td>68</td>
      <td>15-30 sec</td>
      <td>1 min //kb</td>
    </tr>
    <tr>
      <td>Extension</td>
      <td>68</td>
      <td>15-60 sec</td>
      <td></td>
    </tr>
    <tr>
      <td>Final Extension</td>
      <td>68</td>
      <td>5 min</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Hold</td>
      <td>4</td>
      <td>∞</td>
      <td></td>
    </tr>
  </tbody>
</table>

<br/>
  </div>
</div>
<br/>
<h2 className="secondary-heading">Gel Electrophoresis</h2>
    <p>
    Agarose gel electrophoresis is used to separate nucleic acids,i.e., DNA or RNA molecules on the basis of their size by applying an electric current. Smaller molecules migrate faster through the gel, allowing for the visualization and analysis of nucleic acids based on their  distances in the gel from wells.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab4" />
  <label className="accordion-label" htmlFor="tab4">Protocol</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>For making 1% of gel of 40 ml, measure 0.4 grams of agarose powder after calibrating the weighing machine in the glassware. </li>
    <li>Add 40 ml of 1X TAE buffer to the measured agarose.
</li>
<li>Heat the mixture for about 1 minute so that the agarose powder gets completely dissolved with the buffer. </li>
<li>Let the mixture cool to a bearable temperature. Until then keep the casting tray ready with the required comb in it. </li>
<li>Once the mixture is cooled, add EtBr (conc. 10 mg/ml, 0.5 ul for 10 ml) and mix by swirling.</li>
<li>Pour the mixture in the casting tray with the comb and let it solidify.</li>
<li> Once solidified, take the comb out of the gel and keep the solidified gel in the tank filled with 1X TAE such that the gel is completely immersed in the buffer.</li>
<li>Mix the sample and Gene ruler with 6X loading dye,i.e., 1 ul of loading dye and 5 ul of sample. </li>
<li>Load the Gene Ruler and sample accordingly in separate wells.</li>
<li>
Connect the tray with anode and cathode appropriately such that the wells are placed towards the cathode.
</li>
<li>
Connect to the voltage source and run the gel at 100 V for about 40 minutes.
</li>
<li>
Visualize the gel in Gel Doc.
</li>

   </ul>
  </div>
</div>
<br/>
<h2 className="secondary-heading">Gel Extraction and Purification (FAVORGEN BIOTECH CORP)</h2>
    <p>
    Gel extraction and purification is used to isolate specific DNA or RNA fragments from an agarose gel, involves cutting out the desired band from the gel, followed by enzymatic digestion or chemical treatment to release and purify the nucleic acids.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab5" />
  <label className="accordion-label" htmlFor="tab5">Protocol</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Excise the agarose gel with a clean scalpel.</li>
    <li>Transfer up to 300 mg of gel slice into a microcentrifuge tube. 
</li>
<li>Add 500 ul of FADF Buffer to the sample and mix by vortexing.</li>
<li>Incubate at 55°C for 5-10 min and vortex the tube every 2-3 min until the gel slice dissolved completely.</li>
<li>Cool down the sample mixture to room temp. And place the FADF Column into a collection tube.</li>
<li>Transfer 800 ul of the sample mixture to the FADF Column. Centrifuge at 11,000g for 30 sec, then discard the flow through. 
</li>
<li>Add 750 ul of wash buffer (ethanol added) to the FADF Column. Centrifuge at 11,000g for 30 sec, then discard the flow through.</li>
<li>Centrifuge again at full speed,i.e., 18,000g for an additional 3 min to dry the column matrix. </li>
<li>Place the FADF Column to a new microcentrifuge tube.</li>
<li>
Add 40 ul of elution buffer or ddH2O to the membrane center of the FADF Column. Stand the FADF Column for 1 min.
</li>
<li>
Centrifuge at full speed,i.e., 18,000g for 1 min to elute the DNA.
</li>


   </ul>
  </div>
</div>
<br/>
<h2 className="secondary-heading">PCR Clean-up (FAVORGEN BIOTECH CORP)</h2>
    <p>
    PCR clean-up is a process used to remove unwanted components such as primers, nucleotides, and enzymes from a PCR reaction mixture. This purification step typically involves using specialized kits or spin columns to isolate and concentrate the target DNA product, ensuring it's free from contaminants and ready for downstream applications like sequencing or cloning.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab6" />
  <label className="accordion-label" htmlFor="tab6">Protocol</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Transfer up to 100 ul of PCR product to a microcentrifuge tube and add 5 volumes of FADF Buffer, mix well by vortexing.</li>
    <li>Place a FADF Column into a collection tube. 
</li>
<li>Transfer the sample mixture to the FADF Column. Centrifuge at 11,000g for 30 sec, then discard the flow-through.</li>
<li>Centrifuge again at full speed,i.e., 18,000g for an additional 3 min to dry the column matrix.</li>
<li>Place the FADF Column to a new microcentrifuge tube.</li>
<li>Add 40 ul of elution buffer or ddH2O to the membrane center of the FADF Column. Stand the FADF Column for 1 min. 
</li>
<li>Centrifuge at full speed,i.e., 18,000g for 1 min to elute the DNA.</li>
   </ul>
  </div>
</div>
<br/>
<h2 className="secondary-heading">Restriction Digestion</h2>
    <p>
    Restriction digestion is a molecular biology technique that involves cutting DNA molecules at specific recognition sites using restriction enzymes. This process is crucial for molecular cloning as manipulation of DNA fragments by cleaving them at known sites, resulting in fragments with predictable ends for subsequent DNA recombination or analysis.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab7" />
  <label className="accordion-label" htmlFor="tab7">Protocol</label>
  <div className="accordion-content">
  <table>
  <thead>
    <tr>
      <th>S.no.</th>
      <th>Reagents</th>
      <th>Amount (total = 50 ul reaction)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>rCut Smart Buffer</td>
      <td>5 ul</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Gene</td>
      <td>1 ug</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Restriction Enzyme_1</td>
      <td>1 ul</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Restriction Enzyme_2</td>
      <td>1 ul</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Autoclaved MilliQ water</td>
      <td>To 50 ul</td>
    </tr>
  </tbody>
</table>
<br/>

   <ul className="protocol-list">
    <li>Incubate the above mixture at 37°C in a preheated dry bath for about 4 hours.</li>
    <li>Inactivate the enzymes by heating at appropriate temperature as mentioned below based on the enzyme used. 
</li>
   </ul>
   <br/>
   <table>
  <thead>
    <tr>
      <th>Enzyme</th>
      <th>Heat Inactivation Temperature (°C)</th>
      <th>Heat Inactivation Time (min)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BamH1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>EcoR1</td>
      <td>65</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Kpn1</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Sal1</td>
      <td>65</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Sph1</td>
      <td>65</td>
      <td>20</td>
    </tr>
    <tr>
      <td>Xma1</td>
      <td>65</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
<br/>
<ul className="protocol-list">
    <li>Run the mixture on the gel to visualize the digested products, if found at appropriate length when compared with ladder proceed with gel purification. </li>
   </ul>
  </div>
</div>
<br/>
<h2 className="secondary-heading">Ligation</h2>
    <p>
    Ligation is a molecular biology process where DNA fragments with complementary ends are joined together using an enzyme called DNA ligase. This crucial step in molecular cloning, allows the creation of recombinant DNA molecules by linking various DNA fragments, facilitating the construction of customized genetic sequences for research or biotechnological applications.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab8" />
  <label className="accordion-label" htmlFor="tab8">Protocol</label>
  <div className="accordion-content">
  <table>
  <thead>
    <tr>
      <th>S.no.</th>
      <th>Reagents</th>
      <th>Volume</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>10X T4 DNA ligase buffer</td>
      <td>2 ul</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Insert</td>
      <td>-</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Vector</td>
      <td>-</td>
    </tr>
    <tr>
      <td>4</td>
      <td>T4 DNA Ligase</td>
      <td>1 ul</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Autoclaved MilliQ water</td>
      <td>To 20 ul</td>
    </tr>
  </tbody>
</table>

<br/>
Insert and vector are added based on ligation ratio(1:3,1:5,1:7).
<br/>
   <ul className="protocol-list">
    <li>Incubate the above mixture at 16°C for 16 hours. </li>
    <li>Heat inactivate at 65°C for 10 minutes. 
</li>
<li>Check by Transformation.</li>
   </ul>
  </div>
</div>
<br/>
<h2 className="secondary-heading">Agar plates making</h2>
    <p>
    Agar plate making entails sterilizing a mixture of agar and nutrients, which is then poured into petri dishes and solidified. These plates serve as a solid medium for culturing microorganisms in laboratory settings.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab9" />
  <label className="accordion-label" htmlFor="tab9">E.coli</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Measure the required amount of LA powder(35 g/lt) in a calibrated weighing machine and mix it with distilled water to appropriate volume.</li>
    <li>Let the powder dissolve in water.
</li>
<li>Autoclave the mixture for about 30 minutes.</li>
   <li>Let the mixture cool to room temperature.</li>
   <li>Measure the volume using an autoclaved falcon tube and add appropriate volume of selective media to it if required and mix it.</li>
   <li>Pour about 20-25 ml of it to the petri plate and let it solidify to use.</li>
   </ul>
  </div>
</div>
<div className="accordion">
  <input type="checkbox" id="tab10" />
  <label className="accordion-label" htmlFor="tab10">B.subtilis 168</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Dissolve 15 g of Bacto agar in 900 ml of distilled water. </li>
    <li>Autoclave it for 30 minutes to sterilize and dissolve well.
</li>
<li>Then add the following:  </li>
   </ul>
   <br/>
   <table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Volume</th>
      <th>Note</th>
      <th>Working Conc.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10X Spiz</td>
      <td>100 ml</td>
      <td>Can be added when hot</td>
      <td>1X</td>
    </tr>
    <tr>
      <td>50% Glucose</td>
      <td>16 ml</td>
      <td>Can be added when hot</td>
      <td>0.8%</td>
    </tr>
    <tr>
      <td>10% (w/v) Glutamate-K</td>
      <td>8 ml</td>
      <td>Can be added when hot</td>
      <td>0.08%</td>
    </tr>
    <tr>
      <td>10 mg/ml Tryptophan</td>
      <td>4 ml</td>
      <td>Add when warm</td>
      <td>40 ug/ml</td>
    </tr>
  </tbody>
</table>
<br/>
<ul className="protocol-list">
    <li><strong>10X Spizizien’s minimal salts (1l in ddH2O)</strong></li>
   </ul>
   <br/>
   <table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(NH4)2SO4</td>
      <td>20 g</td>
    </tr>
    <tr>
      <td>K2HPO4</td>
      <td>140 g</td>
    </tr>
    <tr>
      <td>KH2PO4</td>
      <td>60 g</td>
    </tr>
    <tr>
      <td>Na.Citrate.2H2O</td>
      <td>10 g</td>
    </tr>
    <tr>
      <td>MgSO4</td>
      <td>2 g</td>
    </tr>
  </tbody>
</table>
<br/>
Dissolve in ddH2O and bring up to the volume. Label 10X SPIZ, autoclave for 30 minutes, and store at room temperature.
<br/><br/>
<ul className="protocol-list">
    <li><strong>50% Glucose</strong></li>
   </ul>
   <br/>
   <table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dextrose anhydrous (D-Glucose)</td>
      <td>500 g</td>
    </tr>
    <tr>
      <td>ddH2O</td>
      <td>500 ml approx.</td>
    </tr>
  </tbody>
</table>
<br/>
Adjust volume to 1 L, autoclave. Mild heat helps dissolve glucose.
<br/><br/>
<ul className="protocol-list">
    <li><strong>10% (w/v) Glutamate-K</strong></li>
   </ul>
<br/>
Prepare 10% glutamate in ddH2O, sterilize by autoclave and store at room temperature.<br/>
<strong>Note:</strong> Use the monopotassium salt monohydrate, not the anhydrous!
<br/><br/>
<ul className="protocol-list">
    <li><strong>Tryptophan 10 mg/ml</strong></li>
   </ul>
<br/>
<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tryptophan</td>
      <td>1 g</td>
    </tr>
    <tr>
      <td>ddH2O</td>
      <td>90 ml</td>
    </tr>
    <tr>
      <td>KOH 1M</td>
      <td>10 ml</td>
    </tr>
  </tbody>
</table>


   <br/>
   Sterilize by filtration, wrap in aluminum foil and store at 4°C.
  </div>
</div>
<br/>
<h2 className="secondary-heading">Plasmid isolation (HELIX BIOSCIENCES)</h2>
    <p>
    Plasmid isolation is a molecular biology technique for extracting and purifying circular DNA molecules called plasmids from bacterial cells. It typically involves cell lysis, separation of plasmids from chromosomal DNA, and purification steps, enabling the isolation of plasmids for subsequent genetic studies, cloning, or biotechnology applications.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab11" />
  <label className="accordion-label" htmlFor="tab11">Protocol</label>
  <div className="accordion-content">
   <ul className="protocol-list">
    <li>Transfer 1-5 ml of well-grown bacterial culture to a centrifuge tube.</li>
    <li>Centrifuge the tube at 11,000 g for 1 min to pellet the cells and discard the supernatant completely.
</li>
</ul>
<br/>
<strong>RESUSPENSION BUFFER</strong><ul className="protocol-list">
<li>Add 250 ul of FADP1 Buffer (RNase A added) to the cell pellet and resuspend the cells completely by pipetting. </li><br/></ul>
<strong>LYSIS BUFFER</strong><ul className="protocol-list">
<li>Add 250 ul of FADP2 Buffer and gently invert the tube 5-10 times. Incubate the sample mixture at room temp for 2-5 min to lyse the cells.</li><br/></ul>
<strong>NEUTRALIZATION BUFFER</strong><ul className="protocol-list">
<li>Add 350 ul of FADP3 Buffer and invert the tube 5-10 times immediately to neutralize the lysate.</li>
<li>Centrifuge at full speed,i.e., 18,000g for 10 min to clarify the lysate. During centrifugation, place the FADP column in a collection tube.</li>
<li> Transfer the supernatant carefully to the FADP column and centrifuge at 11,000g for 30 sec. Discard the flow through and place the column back to the collection tube.</li><br/></ul>
<strong>WASHING</strong><ul className="protocol-list">
<li>Add 400 ul of W1 Buffer to the FADP column and centrifuge at 11,000g for 30 sec. Discard the flow through and place the column back to the collection tube.</li>
<li>Add 700 ul of wash buffer to the FADP column and centrifuge at 11,000g for 30 sec. Discard the flow through and place the column back to the collection tube. </li>
<li>
Centrifuge at full speed,i.e., 18,000g for an additional 3 min to dry the FADP column.
</li>
<li>
Place the FADP column to a new 1.5 ml microcentrifuge tube.
</li><br/></ul>
<strong>ELUTION</strong><ul className="protocol-list">
<li>
Add 50-100 ul of elution buffer or ddH2O to the membrane center of the FADP column. Stand the column for 1 min.
</li>
<li>Centrifuge at full speed,i.e., 18,000g for 1 min to elute plasmid DNAand store the DNA at -20°C.</li>

   </ul>
   
  </div>
</div>
<br/>
<h2 className="secondary-heading">Competent cell preparation</h2>
    <p>
    Competent cells preparation involves making bacterial cells more receptive to foreign DNA.This is achieved through treatments that increase cell permeability, enabling the introduction of exogenous genetic material, such as plasmids, for molecular biology experiments like transformation.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab12" />
  <label className="accordion-label" htmlFor="tab12">CaCl2 Competent cells</label>
  <div className="accordion-content">
    
<strong>CaCl2 Buffers Preparation</strong><br/>
<br/>1M CaCl2 (stock solution, 10x working concentration)<ul className="protocol-list">
<li> Weigh out 11.1g of anhydrous CaCl2.</li>
<li>Add to 80mL of dH2O.</li>
<li>Mix solution until CaCl2 is fully dissolved and top up to 100mL.</li>
<li>Filter sterilize through a 0.22μm pore.</li></ul>
<br/>
0.1M CaCl2 (working solution)

<ul className="protocol-list">
<li>  Add 10mL of 1M CaCl2 to 90mL of dH2O for a 1:10 dilution.</li>
<li>Filter sterilize through a 0.22μm pore.
</li></ul><br/>0.1M CaCl2 + 15% glycerol (working solution)
<ul className="protocol-list">
<li>Mix 6mL 1M CaCl2 with 9mL sterile glycerol and 45mL dH2O.</li></ul><br/>
Overnight Culture(s)
<ul className="protocol-list">
<li>Inoculate 1mL of LB with E. coli.</li>
<li>
Place in a shaking incubator at 37°C and 200 rpm and Incubate for 12-16 hours.
</li></ul><br/>

Generation of Competent Cells (CaCl2 wash)<br/>
Subculturing overnight culture:
<ul className="protocol-list">
<li>
Add 1mL of overnight culture to 99mL of fresh LB (1:100 dilution) without antibiotics. 
</li>
<li> Shake incubate at 37°C and 200 rpm for 3-4 hours or until OD reaches 0.4.
</li></ul>
<br/>
CaCl2 wash:
<ul className="protocol-list">
<li>
Ensure that all reagents (CaCl2 solutions, Oakridge tubes, centrifuge) are ice-cold or at 4°C.
</li>
<li>Separate culture into multiple Oakridge tubes and place on ice for 20 minutes.</li>
<li>Centrifuge at 4°C at 4000 rpm for 10 minutes.</li>
<li>Discard the supernatant by tipping tubes over a discard bin and then aspirating any remaining media. </li>
<li>Resuspend each pellet with 20mL ice-cold 0.1M CaCl2, incubate on ice for 30 minutes.</li>
<li>Centrifuge at 4°C at 4000 rpm for 10 minutes</li>
<li>Discard the supernatant and combine pellets by resuspending in 5mL ice-cold 0.1M CaCl2 with 15% glycerol.</li>
<li>Use for downstream transformation or store in -80°C freezer.</li>
   </ul>
   
  </div>
</div>

<div className="accordion">
  <input type="checkbox" id="tab13" />
  <label className="accordion-label" htmlFor="tab13">Inoue competent cells</label>
  <div className="accordion-content">
<ul className="protocol-list">
<li> Prepare ITB and chill to 0˚C before use.</li>
</ul>
<br/>
<ol className="protocol-list-num">
    <li>Prepare 0.5 M PIPES (pH 6.7) by dissolving 15.1 g of PIPES in 80 mL of pure Milli-Q H2O. Adjust the pH of the solution to 6.7 with 5 M KOH and then add pure H2O to bring the final volume to 100 mL. Sterilize the solution by filtration through a disposable pre-rinsed Nalgene filter (0.45-µm pore size). Divide into aliquots and store frozen at −20˚C.</li>
    <li>
    Dissolve all of the solutes listed below in 800 mL of pure H2O. Then, add 20 mL of 0.5 M
PIPES (pH 6.7). Adjust the volume of the ITB to 1 L with pure H2O.

    </li>
</ol>
<br/>
<table>
  <thead>
    <tr>
      <th>Reagent</th>
      <th>Amount per liter</th>
      <th>Final Conc (mM)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MnCl2·4H2O</td>
      <td>10.88 g</td>
      <td>55</td>
    </tr>
    <tr>
      <td>CaCl2·2H2O</td>
      <td>2.20 g</td>
      <td>15</td>
    </tr>
    <tr>
      <td>KCl</td>
      <td>18.65 g</td>
      <td>250</td>
    </tr>
    <tr>
      <td>PIPES (0.5 M, pH 6.7)</td>
      <td>20 ml</td>
      <td>10</td>
    </tr>
    <tr>
      <td>H2O</td>
      <td>To 1L</td>
      <td></td>
    </tr>
  </tbody>
</table><br/>
<ol className="protocol-list-num" start={3}>
    <li>Sterilize the ITB by filtration through a pre-rinsed 0.45-µm Nalgene filter. Divide into
aliquots and stores at −20˚C. 
</li>
</ol>
<br/>
<ul className="protocol-list">
<li>Pick a single bacterial colony (2–3 mm in diameter) from a plate that has been incubated for 16–20 h at 37˚C. Transfer the colony into 25 mL of LB broth in a 250-mL flask. Incubate the culture for 6–8 h at 37˚C with vigorous shaking (250–300 rpm).
</li>
<li>At 6:00 p.m., use this starter culture to inoculate three 2-L flasks, each containing 250 mL of LB. The first flask receives 10 mL of starter culture, the second receives 4 mL, and the third
receives 2 mL. Incubate all three flasks overnight at 18˚C–23˚C, with moderate shaking.
</li>
<li>The following morning, read the OD600 of all three cultures. Continue to monitor the OD every 45 min.</li>
<li>When the OD600 of one of the cultures reaches 0.55, transfer the culture vessel to an ice-water bath for 10 min. Discard the two other cultures.</li>
<li>
Harvest the cells by centrifugation at 2500g for 10 min at 4˚C.
</li>
<li>
Pour off the medium and store the open centrifuge bottle on a stack of paper towels for 2 min.
</li>
<li>
Resuspend the cells very gently in 80 mL of ice-cold ITB by swirling.
</li>
<li>Harvest the cells by centrifugation at 2500g for 10 min at 4˚C.</li>
<li>Pour off the medium and store the open centrifuge tube on a stack of paper towels for 2 min. Use a vacuum aspirator to remove any drops of remaining medium adhering to the walls of the centrifuge tube or trapped in its neck.</li>
</ul>
<br/>
Freezing of Competent Cells

<ul className="protocol-list">
<li>  Resuspend the cells gently in 20 mL of ice-cold Inoue transformation buffer.</li>
<li>Add 1.5 mL of DMSO. Mix the bacterial suspension by swirling and then store it in ice for 10 min.
</li>
<li>Working quickly, dispense aliquots of the suspensions into chilled, sterile microcentrifuge tubes. Immediately snap-freeze the competent cells by immersing the tightly closed tubes in a bath of liquid nitrogen. Store the tubes at −80˚C until needed.
</li>
<li>Check the competency by transformation.</li>
</ul>
  </div>
</div>
<br></br>
<h2 className="secondary-heading">Transformation</h2>
    <p>
    Transformation is a molecular biology process where foreign DNA is introduced into a host organism, typically a bacterium, altering its genetic makeup. This technique is essential for genetic engineering and the creation of genetically modified organisms.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab16" />
  <label className="accordion-label" htmlFor="tab16">B.subtilis 168</label>
  <div className="accordion-content">
  Day 1
  <br/><ul className="protocol-list">
<li> Streak out host cells on appropriate selective media for single colonies.</li></ul>
<br/>
Day 2<br/>
<ul className="protocol-list">
<li>Use a single colony to inoculate 1 mL of 1X MC:</li>
</ul>
<div className="equations">
    <p>900 μL ddH20</p>
    <p>100 μL 10X MC</p>
    <p>3 μL 1M MgSO4</p>
    <p>4 μL 10 mg/mL Tryptophan</p>
    </div>
<ul className="protocol-list">
<li>Incubate at 37°C with shaking (250 rpm) for 4-5 hours.</li>
<li>
Aliquot 200 μL of cells and add 2 μL of plasmid (~50 ng/μL) into it. Incubate at 37°C with shaking (250 rpm) for 1.5-2 hours.</li>
<li>
Plate the entire volume on appropriate selective media and incubate the plate at 37°C</li></ul><br/>
10X MC for total volume = 10 ml
<br/>
<table>
  <thead>
    <tr>
      <th>Components</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>K2HPO4</td>
      <td>10.7 g</td>
    </tr>
    <tr>
      <td>KH2PO4</td>
      <td>5.2 g</td>
    </tr>
    <tr>
      <td>Glucose</td>
      <td>20 g</td>
    </tr>
    <tr>
      <td>Sodium citrate dihydrate</td>
      <td>0.88 g</td>
    </tr>
    <tr>
      <td>1000X Ferric ammonium citrate (2.2%)</td>
      <td>1 mL</td>
    </tr>
    <tr>
      <td>Casein hydrolysate (Oxoid)</td>
      <td>1 g</td>
    </tr>
    <tr>
      <td>Potassium glutamate monohydrate</td>
      <td>2.2 g</td>
    </tr>
  </tbody>
</table>
<br/>
Mix everything using half the final volume of water. Once everything is dissolved, adjust to the appropriate final volume. Filter sterilize, aliquot and store at -20°C.

   
  </div>
</div>
<div className="accordion">
  <input type="checkbox" id="tab17" />
  <label className="accordion-label" htmlFor="tab17">E. coli</label>
  <div className="accordion-content">
  <ul className="protocol-list">
<li>Thaw 100 ul competent cells on ice for about 10 minutes. </li>
<li>
Add 5 ul of ligated product to one of the micro-centrifuge of competent cells and only plasmid to the other micro-centrifuge of competent cells as a control and mix by flickering.

</li>
<li>
Incubate the mixture in ice for about 30 minutes. 
</li>
<li>
Give the mixture a heat shock at 42°C for 90 seconds in a water bath.
</li>
<li>
Place the mixture in ice again for about 5 minutes for its recovery.
</li>
<li>
Add some volume of LB broth media to the mixture such that the total volume is 1 ml. 
</li>
<li>
Incubate it at 37°C with shaking at 200 rpm for about an hour.
</li>
<li>
Centrifuge the mixture at 3000 rpm for 5 minutes.
</li>
<li>
Discard 900 ul of it and resuspend the rest 100 ul using pipette.
</li>
<li>
Spread the resuspended product on agar plates with and without selection media. 
</li>
<li>
Incubate it at 37°C overnight.
</li>
</ul>

   
  </div>
</div>
<br/>
<h2 className="secondary-heading">Protein Purification (his-tag)</h2>
    <p>
    Description to be added.

    </p>
    <div className="accordion">
  <input type="checkbox" id="tab18" />
  <label className="accordion-label" htmlFor="tab18">Protocol</label>
  <div className="accordion-content">
  <ul className="protocol-list">
<li>Pellet the cells in a 50 ml Falcon tube. </li>
<li>
Add 20 ml of lysis buffer to suspend the pellet and sonicate (time = 4 min, amplitude = 30%, pulse on = 30 sec, pulse-off = 30 sec).

</li>
<li>
Centrifuge at 10,000 rpm at 4°C. 
</li>
<li>
Separate the pellet and supernatant. Take 20 ul of the supernatant to a fresh tube. This will be a total soluble protein labeled as “T”.

</li>
<li>
Pipette 1 ml of lysate onto the Ni-NTA resin in the 15 ml tube. Put on the cap and keep it in ice for 1 hr. 

</li>
<li>
Aspirate the 20% ethanol in Ni-NTA agarose, and wash Ni-NTA agarose repeatedly with PBSbuffer(1×).

</li>

</ul>
</div>
</div>
</main>
    
</div>;

export default Experiments;