import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./routes";
import Error from "./routes/Error";
import Attributions from "./routes/team/Attributions";
import Contribution from "./routes/Contribution";
import Description from "./routes/project/Description";
import Engineering from "./routes/project/Engineering";
import Education from "./routes/humanPractices/Education";
import Model from "./routes/specialPrize/Model";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import BackToTopButton from "./components/ui/BackToTopButton";
import Sustainable from "./routes/humanPractices/Sustainable";
import Experiments from "./routes/wetlab/Experiments";
import Notebook from "./routes/wetlab/Notebook";
import Inclusivity from "./routes/humanPractices/inclusivity";
import Integrated from "./routes/humanPractices/ihp";
import Team from "./routes/team/Team";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        console.log(`Scrolling to #${location.hash}`);
        element.scrollIntoView();
        window.scrollBy({
          top: -window.innerHeight * 0.35,
          behavior: "smooth",
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return (
    <>
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="*" element={<Navbar />} />
      </Routes>
      {/* <Navbar /> */}
      <Routes>
        <Route path="*" element={<Navigate to="/error" replace />} />
        <Route path="/" element={<Home />} />

        {/* Standard URLs */}
        <Route path="/attributions" element={<Attributions />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/description" element={<Description />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/human-practices" element={<Integrated />} />
        <Route path="/sustainable" element={<Sustainable />} />

        {/* Special Prizes */}
        <Route path="/education" element={<Education />} />
        <Route path="/model" element={<Model />} />
        {/* Team*/}
        <Route path="/team" element={<Team />} />
        {/* Wetlab */}
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/experiments" element={<Experiments />} />
        {/* Human Practices */}
        <Route path="/inclusivity" element={<Inclusivity />} />
        {/* 404 */}
        <Route path="/error" element={<Error />} />
      </Routes>
      <Routes>
        <Route path="*" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
