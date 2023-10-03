import { motion } from "framer-motion";

export function Contact() {
  const dev = {
    hidden: {
      opacity: 0,
      x: "-200vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 7.5, duration: 7.9 },
    },
  };
  const dev1 = {
    hidden: {
      opacity: 0,
      y: "200vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 6.5, duration: 6.9 },
    },
  };
  const d1 = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: { delay: 6.5, duration: 6.9 },
    },
  };
  return (
    <>
      <motion.div
        className="contact"
        variants={d1}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={dev1} initial="hidden" animate="visible">
          <h2>DON'T BE SHY !</h2>
          <p className="cont-para">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions
          </p>
          <div className="contact-content">
            <div className="img-title">
              <img src="./images/location.png" alt="location" />

              <h5>ADDRESS PONIT</h5>
            </div>
            <p className="contact-line"> Velachery, Chennai 600042</p>

            <div className="img-title">
              <img src="./images/mail.png" alt="mail" />

              <h5>MAIL ME</h5>
            </div>
            <p className="contact-line">Vijaysachinvij23@gmail.com</p>
            <div className="img-title">
              <img src="./images/phone.png" alt="phone" />

              <h5>CALL ME</h5>
            </div>
            <p className="contact-line">+91 701 099 3660</p>
          </div>
        </motion.span>
        <motion.div variants={dev} initial="hidden" animate="visible">
          <form className="form">
            <h4>Contact Me</h4>
            <input type="text" placeholder="Full Name*" required />
            <br></br>
            <input type="email" placeholder="Email*" required />
            <br></br>
            <input type="text" placeholder="Subject*" required />
            <br></br>
            <input type="text" placeholder="Message*" required />
            <br></br>
            <button>Send Message</button>
            <div className="social">
              <a href="https://www.linkedin.com/in/vijayk23/" target="_blank">
                {" "}
                <img src="./images/LinkedIn.png" alt="github" />
              </a>
              <a href="https://github.com/Vijayk23" target="_blank">
                {" "}
                <img src="./images/github.png" alt="" />
              </a>
              <a href="mailto:vijaysachinvij23@gmail.com" target="_blank">
                {" "}
                <img src="./images/Gmail.png" alt="" />
              </a>
            </div>
            <p className="copyright">© 2022-2023 Vijay. All rights reserved.</p>
          </form>
        </motion.div>
      </motion.div>
    </>
  );
}
