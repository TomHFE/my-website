import { motion } from "framer-motion";

export default function E() {
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
      viewBox="0 0 8 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M6.88 17H0.48C0.16 17 2.98023e-08 16.8133 2.98023e-08 16.44V1.44C2.98023e-08 1.04 0.16 0.839999 0.48 0.839999H6.88C7.22667 0.839999 7.4 1.02667 7.4 1.4V1.72C7.4 1.90667 7.33333 2.05333 7.2 2.16C7.09333 2.24 6.98667 2.28 6.88 2.28H1.28V8.04H6.36C6.46667 8.04 6.57333 8.09333 6.68 8.2C6.81333 8.28 6.88 8.42667 6.88 8.64V8.92C6.88 9.29333 6.70667 9.48 6.36 9.48H1.28V15.56H6.88C7.22667 15.56 7.4 15.7467 7.4 16.12V16.44C7.4 16.6267 7.33333 16.7733 7.2 16.88C7.09333 16.96 6.98667 17 6.88 17Z"
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
