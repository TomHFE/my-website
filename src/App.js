import Header from "./header/Header";
import Homepage from "./homepage/Homepage";
import AboutPage from "./AboutPage";
import { Route, Routes } from "react-router";
import "./main.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
};

export default App;
