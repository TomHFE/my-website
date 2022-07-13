import Header from "./header/Header";
import Homepage from "./homepage/Homepage";
import AboutPage from "./aboutPage/AboutPage";
import { Route, Routes } from "react-router";
import "./main.css";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import ContactPage from "./contactPage/ContactPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer> </footer>
    </div>
  );
};

export default App;
