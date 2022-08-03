import { motion } from "framer-motion";

export default function Intro() {
  const introVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
  };

  return (
    <motion.div className="intro">
      <motion.h1 variants={introVariants} initial="hidden" animate="visible">
        Looking to get my first job
      </motion.h1>
      <motion.h1 variants={introVariants} initial="hidden" animate="visible">
        in web development
      </motion.h1>
    </motion.div>
  );
}
