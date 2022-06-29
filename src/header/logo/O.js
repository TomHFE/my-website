import { motion } from "framer-motion";

export default function O() {
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
    >
      <motion.path
        d="M6.56 17H3.84C2.82667 17 2.04 16.6933 1.48 16.08C0.92 15.44 0.64 14.52 0.64 13.32V4.52C0.64 3.4 0.92 2.50667 1.48 1.84C2.04 1.17333 2.82667 0.839999 3.84 0.839999H6.56C7.57333 0.839999 8.37333 1.17333 8.96 1.84C9.54667 2.50667 9.84 3.4 9.84 4.52V13.32C9.84 14.52 9.54667 15.44 8.96 16.08C8.4 16.6933 7.6 17 6.56 17ZM8.48 4.52C8.48 3.02667 7.84 2.28 6.56 2.28H3.84C2.58667 2.28 1.96 3.02667 1.96 4.52V13.28C1.96 14.8 2.58667 15.56 3.84 15.56H6.56C7.84 15.56 8.48 14.8 8.48 13.28V4.52Z"
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
