import { motion } from "framer-motion";

export default function M() {
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
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M12.44 17H12.12C11.7733 17 11.6 16.8133 11.6 16.44V4.2L7.72 13.28C7.58667 13.52 7.37333 13.64 7.08 13.64H6.72C6.42667 13.64 6.22667 13.52 6.12 13.28L2.24 4.12V16.44C2.24 16.5733 2.2 16.7067 2.12 16.84C2.04 16.9467 1.90667 17 1.72 17H1.4C1.02667 17 0.84 16.8133 0.84 16.44V1.44C0.84 1.04 1.02667 0.839999 1.4 0.839999H2C2.24 0.839999 2.4 0.946666 2.48 1.16L6.92 11.56L11.28 1.16C11.36 0.946666 11.5333 0.839999 11.8 0.839999H12.44C12.6267 0.839999 12.76 0.906666 12.84 1.04C12.92 1.17333 12.96 1.30667 12.96 1.44V16.44C12.96 16.5733 12.92 16.7067 12.84 16.84C12.76 16.9467 12.6267 17 12.44 17Z"
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
