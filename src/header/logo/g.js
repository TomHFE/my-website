import { motion } from "framer-motion";

export default function G() {
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
        d="M6.24 17H3.8C2.78667 17 2 16.6933 1.44 16.08C0.906667 15.44 0.64 14.52 0.64 13.32V4.52C0.64 3.37333 0.906667 2.48 1.44 1.84C2 1.17333 2.78667 0.839999 3.8 0.839999H6.24C7.25333 0.839999 8.04 1.17333 8.6 1.84C9.16 2.48 9.44 3.37333 9.44 4.52V5.6C9.44 6.05333 9.26667 6.28 8.92 6.28H8.6C8.41333 6.28 8.28 6.21333 8.2 6.08C8.14667 5.94667 8.12 5.78667 8.12 5.6V4.52C8.12 3.02667 7.49333 2.28 6.24 2.28H3.8C2.57333 2.28 1.96 3.02667 1.96 4.52V13.28C1.96 14.8 2.57333 15.56 3.8 15.56H6.24C7.49333 15.56 8.12 14.8 8.12 13.28V9.88H5.44C5.14667 9.88 5 9.69333 5 9.32V9.04C5 8.90667 5.04 8.77333 5.12 8.64C5.2 8.50667 5.30667 8.44 5.44 8.44H8.68C9.18667 8.44 9.44 8.72 9.44 9.28V13.32C9.44 14.52 9.16 15.44 8.6 16.08C8.04 16.6933 7.25333 17 6.24 17Z"
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
