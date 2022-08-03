import { motion } from "framer-motion";
import "./background.css";
import { useIsLarge } from "./useislarge";

export default function Dot2() {
  const isLarge = useIsLarge();

  const circleVariants = isLarge
    ? {
        hidden: { x: "-30vw", y: "1vh" },
        visible: {
          x: "40vw",
          y: "1vh",
          transition: { duration: 6, ease: "easeInOut" },
        },
      }
    : {
        hidden: { x: 1260, y: 70 },
        visible: {
          x: "25vw",
          y: "-45vh",
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
