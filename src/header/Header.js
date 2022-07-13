import { motion } from "framer-motion";
import Logo from "./logo/Logo";
import About from "./options/About";
import Portfolio from "./options/Portfolio";
import Contact from "./options/Contact";
import CV from "./options/CV";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <motion.div>
        <motion.div>
          <Link to="/">
            <Logo />
          </Link>
        </motion.div>
        <motion.div className="header-content">
          <Link to="/about">
            <About className="header-options" />
          </Link>
          <Link to="/portfolio">
            <Portfolio className="header-options" />
          </Link>
          <Link to="/contact">
            <Contact className="header-options" />
          </Link>
          <CV className="header-options" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
