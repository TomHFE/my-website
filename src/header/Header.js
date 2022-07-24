import { motion } from "framer-motion";
import Logo from "./logo/Logo";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <motion.div className="header-content">
        <motion.div>
          <Link to="/">
            <Logo />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
