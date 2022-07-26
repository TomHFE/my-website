import { motion } from "framer-motion";
import Logo from "./logo/logo";
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
      </motion.div>
    </div>
  );
};

export default Header;
