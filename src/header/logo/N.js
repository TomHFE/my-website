import { motion } from "framer-motion";

export default function N() {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };

  return (
    <motion.svg
      width="11"
      height="17"
      viewBox="0 0 11 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M9.68 17H9.44C9.22667 17 9.04 16.88 8.88 16.64L2.24 4.12V16.44C2.24 16.5733 2.18667 16.7067 2.08 16.84C2 16.9467 1.86667 17 1.68 17H1.4C1.02667 17 0.84 16.8133 0.84 16.44V1.44C0.84 1.04 1.02667 0.839999 1.4 0.839999H1.68C1.94667 0.839999 2.08 0.919999 2.08 1.08L8.88 13.64V1.44C8.88 1.30667 8.90667 1.17333 8.96 1.04C9.04 0.906666 9.17333 0.839999 9.36 0.839999H9.68C9.86667 0.839999 10 0.906666 10.08 1.04C10.16 1.17333 10.2 1.30667 10.2 1.44V16.44C10.2 16.5733 10.16 16.7067 10.08 16.84C10 16.9467 9.86667 17 9.68 17Z"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={"rgba(0, 0, 0)"}
        stroke-width="0.5"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </motion.svg>
  );
}
