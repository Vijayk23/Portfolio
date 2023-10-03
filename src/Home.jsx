import { Skills } from "./Skills";
import { motion } from "framer-motion";

export function Home() {
  const dev = {
    hidden: {
      opacity: 0,
      x: "-200vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.3, duration: 1.5 },
    },
  };
  const nam = {
    hidden: {
      opacity: 0,
      y: "100vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1.5 },
    },
  };
  const section = {
    hidden: {
      opacity: 0,
      y: "-200vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 1 },
    },
  };
  const arrow = {
    hidden: {
      opacity: 0,
      y: "-100vw",
    },
    visible: {
      opacity: 1,
      y: 30,
      transition: { delay: 0.5, duration: 2 },
    },
  };
  const vijay = {
    hidden: {
      opacity: 0,
      y: "-360vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8,
        duration: 2,
      },
    },
    drag: {},
  };
  return (
    <>
      <div>
        <motion.div className="home-container">
          <motion.section variants={section} initial="hidden" animate="visible">
            <div className="home">
              <span className="home-content">
                <motion.h4 variants={nam} initial="hidden" animate="visible">
                  I'M VIJAY -
                </motion.h4>
                <motion.h1 variants={dev} initial="hidden" animate="visible">
                  WEB DEVELOPER
                </motion.h1>
                <motion.p
                  className="home-para"
                  variants={nam}
                  initial="hidden"
                  animate="visible"
                >
                  I’m Chennai Based Full Stack Developer & Digital Marketer And
                  Designer Focused on Crafting clean & User‑Friendly
                  Experiences, I’m Passionate about Building Excellent Web
                  Development.
                </motion.p>
              </span>
              <motion.img
                src="./images/dotted.png"
                alt="dotted image"
                className="home-dotted"
                variants={dev}
                initial="hidden"
                animate="visible"
              />
            </div>
            <div>
              <img
                src="./images/arrow.png"
                alt="arrow"
                className="down-arrow"
              />
            </div>
            <div>
              <motion.img
                src="./images/vijay.jpg"
                alt="vijay"
                className="vijay"
                variants={vijay}
                initial="hidden"
                animate="visible"
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.8}
              />
            </div>
          </motion.section>
        </motion.div>
      </div>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      ></motion.hr>
      <Skills />
    </>
  );
}
