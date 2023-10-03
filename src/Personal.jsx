import { Workexperience } from "./Workexperience";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

export function Personal() {
  const personalbutton = {
    hidden: {
      opacity: 0,
      y: "-10vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.5, duration: 1.8 },
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

  return (
    <>
      <div className="personal">
        <motion.section>
          <div className="per-flex">
            <motion.span>
              <motion.h2
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                PERSONAL INFOS
              </motion.h2>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                NAME: <span>VIJAY KUMAR </span>
              </motion.p>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                AGE: <span>25 YEARS OLD </span>
              </motion.p>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                FREELANCE: <span>AVAILABLE </span>
              </motion.p>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                LANGUAGES: <span>TAMIL, ENGLISH</span>
              </motion.p>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                PHONE: <span>7010993660</span>
              </motion.p>
              <motion.p
                variants={personalbutton}
                initial="hidden"
                whileInView="visible"
              >
                MAIL ID: <span>VIJAYSACHINVIJ23@GMAIL.COM</span>
              </motion.p>
              <a download href="./images/VIJAY.pdf">
                <motion.button
                  variants={personalbutton}
                  initial="hidden"
                  whileInView="visible"
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
