import { Workexperience } from "./Workexperience";
import { Projects } from "./Projects";

export function Personal() {
  return (
    <>
      <div className="personal">
        <section>
          <div className="per-flex">
            <span>
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
                <button className="download-btn">DOWNLOAD CV ↓</button>
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
    </>
  );
}
