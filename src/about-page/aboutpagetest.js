import { motion } from "framer-motion";
// import tom from "./tom.jpg";

const AboutPagetest = () => {
  return (
    <motion.div>
      <motion.div
        className="aboutTest"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <motion.img
          src={tom}
          alt="tom"
          className="about-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        /> */}
        <h1 style={{ color: "orange" }}>ABOUT</h1>
        <div className="about-section">
          <p>
            For the past year I have been developing my skills in web
            development. Being purely self taught I have managed to develop an
            understanding of the following concepts: React, NPM manegment and
            Github Repository, HTML CSS Javascript libraries including JSX,
            Knowledge of tools such as prettier, ESLint, React Router DOM,
            Framer Motion, Experience testing and troubleshooting UI/UX, Proven
            experience hosting websites through netlify along with linking to
            personal domain.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPagetest;
