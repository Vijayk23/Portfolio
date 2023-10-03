import { Workexperience } from "./Workexperience";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

export function Personal() {
  const personal = {
    hidden: {
      opacity: 0,
      x: "-200vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 4.5, duration: 4.8 },
    },
  };
  const personalbutton = {
    hidden: {
      opacity: 0,
      y: "-200vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.5, duration: 4.8 },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 8px #05004A",
      transition: {
        repeat: Infinity,
        repeatDelay: 0.3,
      },
    },
  };
  const section = {
    hidden: {
      opacity: 0,
      y: "200vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.5, duration: 4.8 },
    },
  };

  return (
    <>
      <div className="personal">
        <motion.section variants={section} initial="hidden" animate="visible">
          <div className="per-flex">
            <motion.span variants={personal} initial="hidden" animate="visible">
              <h2>PERSONAL INFOS</h2>
              <p>
                NAME: <span>VIJAY KUMAR </span>
              </p>
              <p>
                AGE: <span>25 YEARS OLD </span>
              </p>
              <p>
                FREELANCE: <span>AVAILABLE </span>
              </p>
              <p>
                LANGUAGES: <span>TAMIL, ENGLISH</span>
              </p>
              <p>
                PHONE: <span>7010993660</span>
              </p>
              <p>
                MAIL ID: <span>VIJAYSACHINVIJ23@GMAIL.COM</span>
              </p>
              <a download href="./images/VIJAY.pdf">
                <motion.button
                  variants={personalbutton}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  className="download-btn"
                >
                  DOWNLOAD CV ↓
                </motion.button>
              </a>{" "}
              <br></br>
              <img
                src="./images/dotted.png"
                alt="dotted image"
                className="home-dotted"
              />
            </motion.span>
            <div>
              <Workexperience />{" "}
            </div>
          </div>
        </motion.section>
      </div>
      <hr></hr>
      <Projects />
      <br></br>
    </>
  );
}
