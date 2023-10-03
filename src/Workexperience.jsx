import { motion } from "framer-motion";
export function Workexperience() {
  const works = [
    {
      num: 3,
      plus: "+",
      title1: "— YEARS OFF",
      title2: "EXPERIENCE",
    },
    {
      num: 10,
      plus: "+",
      title1: "— COMPLETED",
      title2: "PROJECTS",
    },
    {
      num: 5,
      plus: "+",
      title1: "— HAPPY",
      title2: "CLIENTS",
    },
    {
      num: 12,
      plus: "+",
      title1: "— CERTIFICATE",
      title2: "WON",
    },
  ];

  return (
    <>
      <div className="card">
        {works.map((card) => (
          <Work work={card} />
        ))}
      </div>
      <div></div>
    </>
  );
}

function Work({ work }) {
  const workexp = {
    hidden: {
      opacity: 0,
      rotate: 360,
    },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: { delay: 4.5, duration: 4.8 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 8px rgb(255, 255, 255)",
    },
  };
  return (
    <>
      <motion.div
        variants={workexp}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        viewport={{ once: true }}
        className="card-container"
      >
        <p id="cardline1">
          {work.num}
          <sup>{work.plus}</sup>
        </p>
        <div id="cardline2">
          <p> {work.title1}</p>
          <p> {work.title2}</p>
        </div>
      </motion.div>
    </>
  );
}
