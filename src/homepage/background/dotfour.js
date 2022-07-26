import { motion } from "framer-motion";
import "./background.css";

export default function Dot4() {
  const circleVariants = {
    hidden: { x: 220, y: 1260 },
    visible: {
      x: 220,
      y: -300,
      transition: { duration: 10, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="dot-four"
      variants={circleVariants}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
}
