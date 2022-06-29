import { motion } from "framer-motion";
import "./Background.css";

export default function Dot3() {
  const circleVariants = {
    hidden: { x: 260, y: -560 },
    visible: {
      x: 260,
      y: 180,
      transition: { duration: 5.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="dot-three"
      variants={circleVariants}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
}
