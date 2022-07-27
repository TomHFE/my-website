import { motion } from "framer-motion";
import tom from "./tom.jpg";

const AboutPage = () => {
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
          For the past year I have been developing my skills in web development.
          Being purely self taught I have managed to develop an understanding of
          the following concepts.
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
          <li>
            Proven experience hosting websites through netlify along with
            linking to personal domain
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
