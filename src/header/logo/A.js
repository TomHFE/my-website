import { motion } from "framer-motion";

export default function A() {
  const pathVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { duration: 3, ease: "easeInOut" },
    },
  };
  // test
  return (
    <motion.svg
      width="12"
      height="17"
      viewBox="0 0 12 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M11.36 17H11C10.84 17 10.72 16.9467 10.64 16.84C10.56 16.7333 10.4933 16.6 10.44 16.44L9.24 12.68H3.48L2.2 16.52C2.06667 16.84 1.88 17 1.64 17H1.36C1.17333 17 1.02667 16.92 0.92 16.76C0.84 16.6 0.826667 16.44 0.88 16.28L5.52 1.4L5.64 1.16C5.66667 1.13333 5.68 1.12 5.68 1.12C5.68 1.09333 5.69333 1.06667 5.72 1.04C5.82667 0.906666 5.94667 0.839999 6.08 0.839999H6.6C6.86667 0.839999 7.06667 0.999999 7.2 1.32L11.84 16.28C11.8933 16.44 11.8667 16.6 11.76 16.76C11.68 16.92 11.5467 17 11.36 17ZM6.32 3C5.89333 4.62667 5.46667 6.14667 5.04 7.56C4.64 8.97333 4.29333 10.16 4 11.12H8.72L6.32 3Z"
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
