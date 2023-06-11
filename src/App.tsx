import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./routes";
import Error from "./routes/Error";
import Attributions from "./routes/Attributions";
import Contribution from "./routes/Contribution";
import Description from "./routes/Description";
import Engineering from "./routes/Engineering";
import HumanPractices from "./routes/HumanPractices";
import Education from "./routes/specialPrize/Education";
import Model from "./routes/specialPrize/Model";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route path="/" element={<Home />} />

        {/* Standard URLs */}
        <Route path="/attributions" element={<Attributions />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/description" element={<Description />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/human-practices" element={<HumanPractices />} />

        {/* Special Prizes */}
        <Route path="/education" element={<Education />} />
        <Route path="/model" element={<Model />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
