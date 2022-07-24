import { motion } from "framer-motion";
import "./Background.css";

export default function Dot() {
  const circleVariants = {
    hidden: { x: -260, y: 100 },
    visible: {
      x: 700,
      y: 50,
      transition: { duration: 5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="dot"
      variants={circleVariants}
      initial="hidden"
      animate="visible"
    ></motion.div>
  );
}
