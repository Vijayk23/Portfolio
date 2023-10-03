import { Personal } from "./Personal";
import { motion } from "framer-motion";

export function Expedu() {
  const head = {
    hidden: {
      opacity: 0,
      x: "-200vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 4.3, duration: 2.5 },
    },
  };

  const experience = [
    {
      year: "2021 - PRESENT",
      companyName: "CORRO HEALTHCARE - ",
      role: "EXECUTIVE RCM CYCLE",
      description:
        "As a AR Executive Worked On Behalf of Clarkson eyecare Checking Eligibility & Billing patient appointments",
    },
    {
      year: "2020 - 2021",
      companyName: "OVANTICA - ",
      role: "DIGITAL MARKETING LEAD",
      description:
        "As a Lead  I worked  With Google Ads & Facebook Ads & Email-Marketing,  Maintaining Sale Team And Lead Generator",
    },
  ];
  const education = [
    {
      year: "2015 - 2019",
      institution: "SKP  COLLEGE - ",
      field: "MECHANICAL ENGINNERING ",
      description:
        "Mechanical engineering: design, analyze, and optimize machines & for various industries, solving complex problems.",
    },
    {
      year: "2014 - 2015",
      institution: "Dr. VGN SCHOOL  - ",
      field: "MATHS BIOLOGY ",
      description:
        "Mathematics is essential in biology for modeling, statistics, genetics, and ecological studies, aiding scientific understanding.",
    },
  ];
  return (
    <>
      <div className="exp-edu">
        <div>
          <motion.h3
            variants={head}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="expedu"
          >
            EXPERIENCE & EDUCATION
          </motion.h3>
        </div>
        <div className="exp1">
          {experience.map((exp) => (
            <Experien exper={exp} />
          ))}
        </div>

        <div className="exp1">
          {education.map((edu) => (
            <Exduca educ={edu} />
          ))}
        </div>
      </div>
      <br></br>
      <Personal />
    </>
  );
}

function Experien({ exper }) {
  const cardhead = {
    initial: {
      opacity: 0,
      y: 600,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.3, duration: 2.5 },
    },
  };
  const cardcont = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.3, duration: 2.5 },
    },
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 0 8px #aaaaaa" }}
        viewport={{ once: true }}
        className="exp-card"
      >
        <motion.div
          variants={cardhead}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="exp"
        >
          <img src="./images/work.png" className="workpng" />
          <p className="exp-year">{exper.year} </p>
        </motion.div>
        <motion.p
          variants={cardcont}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="exp-company"
        >
          {exper.companyName} <span className="exp-role">{exper.role}</span>
        </motion.p>
        <motion.p
          variants={cardcont}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="exp-description"
        >
          {exper.description}
        </motion.p>
      </motion.div>
    </div>
  );
}
function Exduca({ educ }) {
  const cardhead = {
    initial: {
      opacity: 0,
      y: 600,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.3, duration: 2.5 },
    },
  };
  const cardcont = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 4.3, duration: 2.5 },
    },
  };
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.02, boxShadow: "0 0 8px #aaaaaa" }}
        viewport={{ once: true }}
        className="edu-card"
      >
        <motion.div
          variants={cardhead}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="edu1"
        >
          <img src="./images/education.png" className="workpng" />
          <p className="edu1-year">{educ.year}</p>
        </motion.div>
        <motion.p
          variants={cardhead}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="exp-company"
        >
          {educ.institution} <span className="exp-role">{educ.field}</span>
        </motion.p>
        <motion.p
          variants={cardcont}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="edu-description"
        >
          {educ.description}
        </motion.p>
      </motion.div>
    </div>
  );
}
