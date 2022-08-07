import { motion } from "framer-motion";
import MovLinks from "./linksmovieapp";
import WebLinks from "./linkswebsite";
import PortfolioVideo from "./portfoliovideo";
import PortfolioVideo2 from "./portfoliovideosecond";

const PortfolioPage = () => {
  return (
    <div className="mov-container">
      <div className="mov-containerz">
        <PortfolioVideo />
      </div>
      <motion.div
        style={{ color: "hsla(308, 64%, 74%, 1)" }}
        whileHover={{
          backgroundColor: "hsla(200, 47%, 14%, 0.88)",
          color: "hsla(227, 88%, 100%, 1)",
          scale: 1.2,
          opacity: 1,
        }}
        className="mov"
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
          <ul className="port-text">
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
      <motion.div style={{ marginTop: "7rem" }}>
        <div className="mov-containerz">
          <PortfolioVideo2 />
        </div>
        <motion.div
          style={{ color: "hsla(308, 64%, 74%, 1)" }}
          whileHover={{
            backgroundColor: "hsla(200, 47%, 14%, 0.88)",
            color: "hsla(227, 88%, 100%, 1)",
            scale: 1.2,
          }}
          className="mov"
          // onHoverStart={{ opacity: 1 }}
        >
          <h1>Website</h1>
          <WebLinks />
          <div className="mov-text">
            <p>
              Portfolio site with responsive user interface built with framer
              motion, react router v6 used for linking pages along with anchor
              tags to Linkedin, Github, EmailJS compatability and a downloadable
              CV.
            </p>
            <h3>Features</h3>
            <ul className="port-text">
              <li>Responsive web design</li>
              <li>EmailJS</li>
              <li>Animated transitions and flex compatibility</li>
              <li>
                React Router capabilities including linking, redirect, UseParams
                and routes
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioPage;

// add pictures of movie App find link for it use netlify to create website for it
