import { motion } from "framer-motion";
import Logo from "./logo/Logo";
import About from "./options/About";
import Portfolio from "./options/Portfolio";
import Contact from "./options/Contact";
import CV from "./options/CV";
import "./header.css";
import { Link } from "react-router-dom";
import OptionsBar from "./OptionsBar";

const Header = () => {
  return (
    <div>
      <motion.div className="header-content">
        <motion.div>
          <Link to="/">
            <Logo />
          </Link>
        </motion.div>
        {/* <OptionsBar /> */}
      </motion.div>
    </div>
  );
};

export default Header;
