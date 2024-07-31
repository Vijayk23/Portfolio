import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Contact } from "./Contact";
import { motion } from "framer-motion";

export function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const projects = [
    {
      pic: "./images/Company.png",
      name: "Company",
      url: "https://vjcompany.netlify.app/",
      description:
        "I developed a sophisticated ReactJS dashboard homepage, providing an intuitive and dynamic user interface for efficient data visualization and management for a service-based company website.",
    },
    {
      pic: "./images/Assignment.png",
      name: "Dashboard",
      url: "https://dashboardtemplate2.netlify.app/",
      description:
        "I've developed a sleek ReactJS dashboard homepage, offering an intuitive and dynamic user interface for efficient data visualization and management.",
    },
    {
      pic: "./images/ott.png",
      name: "OTT - Developing...",
      url: "https://ottclone2.netlify.app/",
      description:
        "An innovative OTT web app clone, offering a seamless streaming experience with a vast library of content.",
    },
    {
      pic: "./images/Todo-list.png",
      name: "TODO-LIST",
      url: "https://vijayk23.github.io/Todolist/",
      description:
        "Efficiently manage tasks with our intuitive todo-list app. Stay organized and boost productivity on the go!",
    },
    {
      pic: "./images/calculator.png",
      name: "CALCULATOR",
      url: "https://vijayk23.github.io/Calculator/",
      description:
        "Streamline your calculations with our user-friendly calculator app. Accurate solutions for equations on the fly.",
    },
    {
      pic: "./images/STOPWATCH.png",
      name: "STOP WATCH",
      url: "https://vijaykstopwatch.netlify.app/",
      description:
        "React stopwatch: A simple timer app with start, stop, and reset functionality to track elapsed time accurately.",
    },

    {
      pic: "./images/Chess Board.png",
      name: "CHESS BOARD",
      url: "https://vijayk23.github.io/ChessBoard/",
      description:
        "Immerse yourself in strategic battles with our Chess Board app. Play, learn, and master the classic game on your device. Checkmate!",
    },
    {
      pic: "./images/personal portfolio.png",
      name: "PERSONAL PORTFOLIO",
      url: "https://vijayk23.netlify.app/",
      description:
        "Explore my journey through innovative projects and skills in my personal portfolio app. Discover my creative world.",
    },
  ];

  return (
    <>
      <div className="projects">
        <motion.h3 className="proj-title">
          Explore a collection of personally developed projects showcased here.
        </motion.h3>

        <Carousel
          showDots={true}
          swipeable={true}
          draggable={true}
          responsive={responsive}
          className="projects-card"
        >
          {projects.map((pro, index) => (
            <Project proj={pro} />
          ))}
        </Carousel>
      </div>
      <br></br>
      <Contact />
    </>
  );
}

function Project({ proj }) {
  const img = {
    initial: {
      opacity: 0,
      rotate: 2,
    },
    animate: {
      opacity: 1,
      rotate: 0,
      transition: { delay: 0.3, duration: 1.5 },
    },
  };
  const card1 = {
    initial: {
      opacity: 0,
      y: "5vw",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 1.5 },
    },
  };
  return (
    <>
      <motion.div
        variants={card1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="project-conatiner"
      >
        <motion.img
          variants={img}
          initial="initial"
          whileInView="animate"
          src={proj.pic}
          className="project-img"
        />
        <h4 className="project-name">{proj.name}</h4>
        <p className="project-des">{proj.description}</p>
        <a href={proj.url} target="_blank" className="projectbutton">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="project-button"
          >
            LIVE URL
          </motion.button>
        </a>
      </motion.div>
    </>
  );
}
