import {Sidebar} from "../../components/layout/sidebar";
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Model = () => <div className="Model">
  {/* <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <p>Inline Math: <InlineMath math="c = \sqrt{a^2 + b^2}" /></p>
      <p>Block Math:</p>
      <BlockMath math="f(x) = \int_{-\infty}^{\infty} e^{-x^2} dx" /> */}
    <Sidebar width={300} height={"100vh"}>
    <div className="sidebar-section">
      <ul>
        <li>
          Kill switch
        </li>
        <li>
          Motivation
        </li>
        <li>
          Design
        </li>
        <li>
          Model
        </li>
        <li>
          Conclusion
        </li>
        <li>
          Drawbacks and Improvement
        </li>
        <li>
          References
        </li>
        <li>
          MD simulation
          <ul>
            <li> Motivation </li>
            <li> Materials and Methods </li>
            <li> Workflow
              <ul>
                <li> Insertion of protein into membrane </li>
                <li> MD simulation </li>
              </ul>
            </li>
            <li> Analysis </li>
            <li> Conclusion </li>
            <li> References </li>
          </ul>
        </li>
        <li>
          Design of Experiment
          <ul>
            <li> Motivation </li>
            <li> Materials and Methods </li>
            <li> Analysis </li>
            <li> Proposed Predictive Model </li>
            <li> Validation </li>
            <li> Results </li>
            <li> References </li>
          </ul>
        </li>
      </ul>
    </div>
    </Sidebar>
</div>;

export default Model;
