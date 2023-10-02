import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Contact } from "./Contact";

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
        <h3 className="proj-title">
          Explore a collection of personally developed projects showcased here.
        </h3>
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
  return (
    <>
      <div className="project-conatiner">
        <img src={proj.pic} className="project-img" />
        <h4 className="project-name">{proj.name}</h4>
        <p className="project-des">{proj.description}</p>
        <a href={proj.url} target="_blank" className="projectbutton">
          <button className="project-button">LIVE URL</button>
        </a>
      </div>
    </>
  );
}