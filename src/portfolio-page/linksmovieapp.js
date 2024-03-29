import { AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { AiFillChrome } from "react-icons/ai";
import { motion } from "framer-motion";

export default function MovLinks() {
  const movieApp = "https://movie-app-final.netlify.app/";
  const movieAppGit = "https://github.com/TomHFE/movie-app";
  return (
    <div>
      <IconContext.Provider value={{ size: "4em" }}>
        <a href={movieApp} target="_blank" rel="noopener noreferrer">
          <motion.button
            className="port-button"
            style={{ color: "hsla(214, 68%, 100%, 1)" }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
              color: "hsla(50, 100%, 55%, 1)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AiFillChrome />
          </motion.button>
        </a>
        <a href={movieAppGit} target="_blank" rel="noopener noreferrer">
          <motion.button
            className="port-button"
            style={{ color: "hsla(214, 68%, 100%, 1)" }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.2 },
              color: "hsla(50, 100%, 55%, 1)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineGithub />
          </motion.button>
        </a>
      </IconContext.Provider>
    </div>
  );
}
