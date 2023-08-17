import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./routes";
import Error from "./routes/Error";
import Attributions from "./routes/team/Attributions";
import Contribution from "./routes/Contribution";
import Description from "./routes/project/Description";
import Engineering from "./routes/project/Engineering";
import HumanPractices from "./routes/humanPractices/HumanPractices";
import Education from "./routes/humanPractices/Education";
import Model from "./routes/specialPrize/Model";
import Navbar from "./components/layout/Navbar";
import HomeNav from "./components/layout/HomeNav";
import { useEffect } from "react";
import BackToTopButton from "./components/ui/BackToTopButton";

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
        <Route path="/" element={<HomeNav />} />
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
        <Route path="/human-practices" element={<HumanPractices />} />

        {/* Special Prizes */}
        <Route path="/education" element={<Education />} />
        <Route path="/model" element={<Model />} />

        {/* 404 */}
        <Route path="/error" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
