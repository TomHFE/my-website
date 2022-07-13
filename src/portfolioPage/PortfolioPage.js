import { motion } from "framer-motion";
import MovLinks from "./MovLinks";
import PortfolioVideo from "./PortfolioVideo";

const PortfolioPage = () => {
  return (
    <div className="mov-container">
      <PortfolioVideo />
      <motion.div
        style={{ color: "pink" }}
        whileHover={{
          backgroundColor: "rgb(5, 37, 58, 0.95)",
          color: "white",
          scale: 1.2,
        }}
        className="mov"
        onHoverStart={{ opacity: 1 }}
      >
        <h1>Movie App</h1>
        <MovLinks />
        <div className="mov-text">
          <p>
            React based application for Films and TV shows. This App enables the
            user to search for movies by their name. This then fetches to an api
            which looks for information related to the film such as plot,
            runtime and actors/directors involved with the film.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Input search to an API through an async function</li>
            <li>Error handling and redirect</li>
            <li>Animated transitions and flex compatibility</li>
            <li>
              Props sent through UseParams linked to another API allowing for
              the user to search details about the movie
            </li>
            <li>
              React Router capabilities including linking, redirect, UseParams
              and routes
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;

// add pictures of movie App find link for it use netlify to create website for it
