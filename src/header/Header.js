import { motion } from "framer-motion";
import Logo from "./logo/Logo";
import About from "./About";
import "./header.css";
const Header = () => {
  return (
    <div>
      <motion.div>
        <motion.div>
          <Logo />
        </motion.div>
        <motion.div className="header-content">
          <About />
          <h3>PORTFOLIO</h3>
          <h3>CONTACT</h3>
          <h3>CV</h3>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
