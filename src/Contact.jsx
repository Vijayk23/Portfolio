export function Contact() {
  return (
    <>
      <div className="contact">
        <span>
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
        </span>
        <div>
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
              <img src="./images/LinkedIn.png" alt="github" />
              <img src="./images/github.png" alt="" />
              <img src="./images/Gmail.png" alt="" />
            </div>
            <p className="copyright">© 2022-2023 Vijay. All rights reserved.</p>
          </form>
        </div>
      </div>
    </>
  );
}
