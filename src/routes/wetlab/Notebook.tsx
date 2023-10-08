import HeroSection from "../../components/layout/HeroSection";
import "./Notebook.css";

const Notebook = () => <div className="Notebook">
<HeroSection
      title={
        <>
          <span>Notebook</span>
        </>
      }
    />
    <div className="background-image">
    <div className="button-calender"><button className="calender">Calender</button></div>
       <div className="elements">
        
        <div className="left-column">
            <div className="left-elements">
            
  <button className="round-6">May</button>
  <button className="round-6">June</button>
  <button className="round-6">July</button>
  
            </div>
        </div>
        <div className="right-column">
            <div className="right-elements">
            <button className="round-6">August</button>
  <button className="round-6">September</button>
  <button className="round-6">October</button>
            </div>
        </div>
       </div>
    </div>


</div>;

export default Notebook;