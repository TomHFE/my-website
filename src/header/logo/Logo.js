import { motion } from "framer-motion";
import T from "./T";
import O from "./O";
import M from "./M";
import E from "./E";
import N from "./N";
import G from "./G";
import L from "./L";
import A from "./A";
import D from "./D";

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
        <M /> <E />
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
