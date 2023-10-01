import { Expedu } from "./Expedu";

export function Skills() {
  return (
    <>
      <div className="skills">
        <h3>SKILS & TOOLS</h3>
        <h4>
          I possess a diverse skill set in web development and design, with
          proficiency in HTML, JavaScript, ReactJS, and CSS. My familiarity with
          ReactJS empowers me to build modern and efficient user interfaces,
          enhancing the overall functionality of web projects.
        </h4>
        <div className="skills-img">
          <img src="./images/html5.png" alt="html5" className="img" />
          <img src="./images/css.png" alt="css" className="img" />
          <img src="./images/javascript.png" alt="javascript" className="img" />
          <img src="./images/react.png" alt="react" className="img" />
          <img
            src="./images/material ui.png"
            alt="material ui"
            className="img"
          />
          <img src="./images/figma.png" alt="figma" className="img" />
          <img src="./images/github.png" alt="github" className="img" />
          <img src="./images/vs code.png" alt="vs code" className="img" />
          <img src="./images/google.png" alt="google" className="img" />
          <img
            src="./images/facebook ads.png"
            alt="facebook ads"
            className="img1"
          />
        </div>
      </div>
      <hr></hr>
      <Expedu />
    </>
  );
}
