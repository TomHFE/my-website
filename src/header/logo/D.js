import { motion } from "framer-motion";

export default function D() {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 6, ease: "easeInOut" },
    },
  };

  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 10 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M5.88 17H0.52C0.2 17 0.0400001 16.8133 0.0400001 16.44V1.44C0.0400001 1.04 0.2 0.839999 0.52 0.839999H5.88C6.89333 0.839999 7.68 1.17333 8.24 1.84C8.82667 2.50667 9.12 3.4 9.12 4.52V13.32C9.12 14.52 8.84 15.44 8.28 16.08C7.72 16.6933 6.92 17 5.88 17ZM7.8 4.52C7.8 3.02667 7.16 2.28 5.88 2.28H1.4V15.56H5.88C7.16 15.56 7.8 14.8 7.8 13.28V4.52Z"
        fill="none"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        stroke={"rgba(0, 0, 0)"}
        strokeWidth="0.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
