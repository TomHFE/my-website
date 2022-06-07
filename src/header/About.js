import { motion } from "framer-motion";

export default function About() {
  const variants = {
    hidden: {
      opacity: 0,
      x: 500,
      y: -200,
    },
    visible: {
      y: -100,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div
      // className="options"

      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
        textShadow: "0px 0px 8px rgb(94,97,117,46)",
      }}
    >
      ABOUT
    </motion.div>
  );
}
