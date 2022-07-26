import { motion } from "framer-motion";
import T from "./t";
import O from "./o";
import M from "./m";
import E from "./e";
import N from "./n";
import G from "./g";
import L from "./l";
import A from "./a";
import D from "./d";

const Logo = () => {
  // const variants = {
  //   hidden: { rotate: -180 },
  //   visible: { rotate: 0, transition: { duration: 1 } },
  // };
  // const pathVariants = {
  //   hidden: { opacity: 0, pathLength: 0 },
  //   visible: {
  //     opacity: 1,
  //     pathLength: 1,
  //     transition: { duration: 1 },
  //   },
  // };

  return (
    <motion.div>
      <motion.h1 className="logo">
        <T />
        <O />
        <M />
        <E />
        <N />
        <G />
        <L />
        <A />
        <N />
        <D />
      </motion.h1>
    </motion.div>
  );
};

export default Logo;

// fill="none"
// variants={pathVariants}
// initial="hidden"
// animate="visible"
// stroke={"rgba(0, 0, 0)"}
// stroke-width="2"
// stroke-linejoin="round"
// stroke-linecap="round"
