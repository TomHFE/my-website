import { motion } from "framer-motion";
import "./background.css";
import { useIsLarge } from "./useislarge";

export default function Dot3() {
  const isLarge = useIsLarge();

  const circleVariants = isLarge
    ? {
        hidden: { x: "-30vw", y: "1vh" },
        visible: {
          x: "60vw",
          y: "2vh",
          transition: { duration: 6, ease: "easeInOut" },
        },
      }
    : {
        hidden: { x: "-80vw", y: "6vh" },
        visible: {
          x: "35vw",
          y: "-70vh",
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
