import Header from "./header/header";
import Homepage from "./homepage/homepage";
import { Route, Routes } from "react-router";
import "./main.css";
import PortfolioPage from "./portfoliopage/portfoliopage";
import ContactPage from "./contactpage/contactpage";
import OptionsBar from "./header/optionsbar";
import CvPage from "./cvpage";

const App = () => {
  return (
    <div>
      <Header />
      <OptionsBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>
      <footer> </footer>
    </div>
  );
};

export default App;
