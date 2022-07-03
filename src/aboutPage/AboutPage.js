import { motion } from "framer-motion";
import tom from "./tom.jpg";

const AboutPage = () => {
  const aboutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, duration: 2 },
  };

  return (
    <motion.div className="about-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={tom}
          alt="tom"
          className="about-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <h1>ABOUT</h1>
        <p>
          Hello my name's tom and for the past 9 months I have been developing
          my skills in web development. Being purely self taught I have managed
          to develop an understanding of the following consepts.
        </p>
        <ul>
          <li>React</li>
          <li>NPM manegment and Github Repository</li>
          <li>HTML CSS Javascript libraries including JSX</li>
          <li>
            Knowledge of tools such as prettier, ESLint, React Router DOM,
            Framer Motion
          </li>
          <li>Experience testing and troubleshooting UI/UX</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
