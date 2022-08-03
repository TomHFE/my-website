import { motion } from "framer-motion";
import "./background.css";
import { useIsLarge } from "./useislarge";

export default function Dot() {
  const isLarge = useIsLarge();

  const circleVariants = isLarge
    ? {
        hidden: { x: "-30vw", y: "2vh" },
        visible: {
          x: "20vw",
          y: "2vh",
          transition: { duration: 6, ease: "easeInOut" },
        },
      }
    : {
        hidden: { x: -260, y: 100 },
        visible: {
          x: "50vw",
          y: "-15vh",
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
