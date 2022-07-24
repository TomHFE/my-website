import { motion } from "framer-motion";
import "./Background.css";

export default function Dot2() {
  const circleVariants = {
    hidden: { x: 1260, y: 70 },
    visible: {
      x: 320,
      y: 20,
      transition: { duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="dot-two"
      variants={circleVariants}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
}
