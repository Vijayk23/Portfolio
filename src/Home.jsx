import { Skills } from "./Skills";

export function Home() {
  return (
    <>
      <div>
        <div className="home-container">
          <section>
            <div className="home">
              <span className="home-content">
                <h4>I'M VIJAY -</h4>
                <h1>WEB DEVELOPER</h1>
                <p className="home-para">
                  I’m Chennai Based Full Stack Developer & Digital Marketer And
                  Designer Focused on Crafting clean & User‑Friendly
                  Experiences, I’m Passionate about Building Excellent Web
                  Development.
                </p>
              </span>
              <img
                src="./images/dotted.png"
                alt="dotted image"
                className="home-dotted"
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
              <img src="./images/vijay.jpg" alt="vijay" className="vijay" />
            </div>
          </section>
        </div>
      </div>
      <Skills />
    </>
  );
}
