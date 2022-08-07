import Header from "./header/header";
import Homepage from "./homepage/homepage";
import { Route, Routes } from "react-router";
import "./main.css";
import PortfolioPage from "./portfolio-page/portfoliopage";
import ContactPage from "./contact-page/contactpage";
import OptionsBar from "./header/optionsbar";
import CvPage from "./cv-page/cvpage";

const App = () => {
  return (
    <div>
      <div className="center-home">
        <Header />
        <OptionsBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
      <Routes>
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
      <footer> </footer>
    </div>
  );
};

export default App;
