import { Workexperience } from "./Workexperience";
import { Projects } from "./Projects";
import { motion } from "framer-motion";

export function Personal() {
  const personalbutton = {
    hidden: {
      opacity: 0,
      y: "-5vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1.5 },
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
        <section>
          <div className="per-flex">
            <span>
              <h2>PERSONAL INFOS</h2>
              <p>
                {" "}
                NAME: <span>VIJAY KUMAR </span>{" "}
              </p>
              <p>
                {" "}
                AGE: <span>25 YEARS OLD </span>
              </p>
              <p>
                {" "}
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
            </span>
            <div>
              <Workexperience />{" "}
            </div>
          </div>
        </section>
      </div>
      <hr></hr>
      <Projects />
      <br></br>
    </>
  );
}
