import { motion } from "framer-motion";

export default function L() {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 6, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      width="50"
      height="50"
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M7.92 17H1.24C0.893333 17 0.72 16.8133 0.72 16.44V1.44C0.72 1.28 0.76 1.14667 0.84 1.04C0.92 0.906666 1.05333 0.839999 1.24 0.839999H1.52C1.73333 0.839999 1.88 0.906666 1.96 1.04C2.04 1.17333 2.08 1.30667 2.08 1.44V15.52H7.92C8.05333 15.52 8.16 15.5867 8.24 15.72C8.34667 15.8267 8.4 15.9467 8.4 16.08V16.44C8.4 16.6267 8.34667 16.7733 8.24 16.88C8.16 16.96 8.05333 17 7.92 17Z"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={"rgba(0, 0, 0)"}
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
