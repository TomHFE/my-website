import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AboutPagetest from "../aboutpage/aboutpagetest";
import EmailContent from "./emailcontent";

// see if you need to change while hover to a use state hook

const ContactPage = () => {
  // git linkedin email

  const gitLink = "https://github.com/TomHFE";
  const linkedinLink = "https://www.linkedin.com/in/tom-england-256b57193/";

  return (
    <div className="container-box">
      <div>
        <AboutPagetest />
      </div>
      <div>
        <motion.div className="contact-containers">
          <a href={gitLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 1.4,
              }}
              className="contact-container"
            >
              <motion.div>
                <motion.div className="contact-text">
                  <AiFillGithub className="contact-logo" />
                </motion.div>
                <p>check out my github </p>
              </motion.div>
            </motion.div>
          </a>
          <EmailContent />
          {/* <a href={movieApp} target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{ color: "grey" }}
              whileHover={{
                color: "white",
                scale: 1.2,
              }}
              whileTap={{
                scale: 1.4,
              }}
              className="contact-container"
            >
              <div>
                <SiMinutemailer className="contact-logo" />
                <p>feel free to contact me via email</p>
              </div>
            </motion.div>
          </a> */}
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 1.4,
              }}
              className="contact-container"
            >
              <div>
                <AiFillLinkedin className="contact-logo" />
                <p className="contact-text">have a look at my linkedin</p>
              </div>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
