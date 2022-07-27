import { motion } from "framer-motion";

export default function T() {
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
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        className="logo"
        d="M9.04 2.28H5.88V16.44C5.88 16.5733 5.82667 16.7067 5.72 16.84C5.64 16.9467 5.50667 17 5.32 17H5.08C4.89333 17 4.76 16.9467 4.68 16.84C4.6 16.7067 4.56 16.5733 4.56 16.44V2.28H1.36C1.22667 2.28 1.10667 2.24 1 2.16C0.893333 2.08 0.84 1.93333 0.84 1.72V1.4C0.84 1.02667 1.01333 0.839999 1.36 0.839999H9.04C9.38667 0.839999 9.56 1.02667 9.56 1.4V1.72C9.56 2.09333 9.38667 2.28 9.04 2.28Z"
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
