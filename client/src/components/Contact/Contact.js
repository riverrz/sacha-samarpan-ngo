import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

import "./Contact.css";

const contact = props => {
  return (
    <WhiteContainer style={{ height: "90vh" }}>
      <aside className="contact__sideBar">
        <div className="contact__sideBar__item">
          <i className="fab fa-facebook-f " />
          <div className="contact__sideBar__itemText">facebook.com</div>
        </div>
        <div className="contact__sideBar__item">
          <i className="fab fa-instagram" />
          <div className="contact__sideBar__itemText">instagram.com</div>
        </div>
        <div className="contact__sideBar__item">
          <i className="fab fa-youtube" />
          <div className="contact__sideBar__itemText">youtube.com</div>
        </div>
        <div className="contact__sideBar__item">
          <i className="fab fa-twitter" />
          <div className="contact__sideBar__itemText">twitter.com</div>
        </div>
      </aside>
      <main className="contact__main">
        <h1 className="contact__main__heading--primary">Contact Us</h1>
        <div className="contact__main__container">
          <form
            action="/"
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
              />
              <input
                type="text"
                className="contact__input"
                placeholder="Phone No."
                name="message[phoneNo]"
              />
              <textarea
                name="message[message]"
                className="contact__textArea"
                cols="30"
                rows="10"
                placeholder="Your Message"
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
