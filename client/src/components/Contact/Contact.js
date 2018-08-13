import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

import "./Contact.css";

const contact = props => {
  return (
    <WhiteContainer style={{ height: "90vh" }}>
      <aside className="contact__sideBar">
        <div className="contact__sideBar__item  facebook--backColor">
          <a
            href="https://www.facebook.com/SacchaSamarpanNGO"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-facebook-f " />
          </a>
        </div>
        <div className="contact__sideBar__item instagram--backColor">
          <a
            href="https://www.instagram.com/sacchasamarpan_ngo"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="contact__sideBar__item youtube--backColor">
          <a
            href="https://www.youtube.com/channel/UC6mMdgm7DVDwcgQUoSrWIKQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-youtube" />
          </a>
        </div>
        <div className="contact__sideBar__item twitter--backColor">
          <a
            href="https://www.twitter.com/SacchaSamarpan1"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </aside>
      <main className="contact__main">
        <h1 className="contact__main__heading--primary">
          Get in touch with us
        </h1>
        <div className="contact__main__container">
          <form
            action="/support/email"
            method="POST"
            className="contact__emailForm"
            autoComplete="off"
            spellCheck={false}
          >
            <h1 className="contact__heading--secondary">Mail Us</h1>
            <div className="contact__form__inputContainer">
              <input
                type="text"
                className="contact__input"
                placeholder="First Name"
                name="message[fName]"
                required
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Last Name"
                name="message[lName]"
              />
              <input
                type="email"
                className="contact__input"
                placeholder="Email Address"
                name="message[email]"
                required
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Phone No."
                name="message[phoneNo]"
                required
              />
              <textarea
                name="message[body]"
                className="contact__textArea"
                cols="30"
                rows="10"
                placeholder="Your Message"
                required
              />
            </div>
            <button className="contact__form__submitBtn">Submit</button>
          </form>
          <div className="contact__main__altContainer">
            <h1 className="contact__heading--secondary">Alternatives</h1>
            <div className="contact__mapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.119140935912!2d77.22824095055613!3d28.506062982381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a33d8ed9b5%3A0xbd36fa4d47458ebd!2sMahila+Training+Institute!5e0!3m2!1sen!2sin!4v1531673041841"
                frameBorder="0"
                allowFullScreen
                title="hq-map"
                className="contact__map"
              />
            </div>
          </div>
        </div>
      </main>
    </WhiteContainer>
  );
};

export default contact;
