import { Expedu } from "./Expedu";
import { motion } from "framer-motion";

export function Skills() {
  const head = {
    initial: {
      opacity: 0,
      x: "-200vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { delay: 2.3, duration: 2.5 },
    },
  };
  const para = {
    initial: {
      opacity: 0,
      y: "100vw",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 2.3, duration: 2.5 },
    },
  };
  const skill = {
    initial: {
      opacity: 0,
      rotate: 360,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 3,
        duration: 2,
      },
    },
  };
  return (
    <>
      <div className="skills">
        <motion.h3
          variants={head}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          SKILS & TOOLS
        </motion.h3>
        <motion.h4
          variants={para}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          I possess a diverse skill set in web development and design, with
          proficiency in HTML, JavaScript, ReactJS, and CSS. My familiarity with
          ReactJS empowers me to build modern and efficient user interfaces,
          enhancing the overall functionality of web projects.
        </motion.h4>
        <div className="skills-img">
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/html5.png"
            alt="html5"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/css.png"
            alt="css"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/javascript.png"
            alt="javascript"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/react.png"
            alt="react"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/material ui.png"
            alt="material ui"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/figma.png"
            alt="figma"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/github.png"
            alt="github"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/vs code.png"
            alt="vs code"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/google.png"
            alt="google"
            className="img"
          />
          <motion.img
            variants={skill}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            viewport={{ once: true }}
            src="./images/facebook ads.png"
            alt="facebook ads"
            className="img1"
          />
        </div>
      </div>
      <motion.hr
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.5 }}
      ></motion.hr>
      <Expedu />
    </>
  );
}
