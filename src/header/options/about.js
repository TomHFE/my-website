import { motion } from "framer-motion";

export default function About() {
  const variants = {
    hidden: {
      opacity: 0,
      x: 500,
      y: -200,
    },
    visible: {
      y: -125,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };
  return (
    <motion.div>
      <motion.div
        className="options"
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        whileTap={{
          scale: 1,
          transition: { duration: 0.1 },
        }}
      >
        ABOUT
      </motion.div>
    </motion.div>
  );
}

// <motion.svg
//   width="36"
//   height="36"
//   viewBox="0 0 36 36"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <motion.circle
//     className="circle"
//     cx="18"
//     cy="18"
//     r="18"
//     fill="#FAFF09"
//     fill-opacity="0.75"
//   />
// </motion.svg>
