import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const OptionsBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setOpen(!open)}
        style={{
          content: "left",
          padding: "0.8rem",
          margin: "1rem",
          display: "block",
          borderRadius: "0.4rem",
          width: open ? "8rem" : "2rem",
          height: open ? "10rem" : "3rem",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <motion.h2>
          <GiHamburgerMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            layout="position"
          />
        </motion.h2>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            layout="position"
          >
            <div>
              <motion.div className="options-menu">
                <Link to="/">HOME</Link>
                <Link to="/contact">CONTACT </Link>
                <Link to="/portfolio"> PORTFOLIO </Link>
                <Link to="/cv">CV</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

// rgb(84, 144, 254)
/* boxShadow: open
? "4px 5px 7px rgba(0,0,0,0.3)"
: "0px 0px 0px rgba(0,0,0,0)",
backgroundColor: open ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)",*/

export default OptionsBar;
