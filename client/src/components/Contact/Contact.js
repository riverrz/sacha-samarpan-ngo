import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

import "./Contact.css";

const contact = props => {
  return (
    <WhiteContainer style={{ height: "50rem" }}>
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
          <form action="/" className="contact__emailForm" autoComplete="off" spellCheck={ false }>
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
            <h1>Alternatives</h1>
          </div>
        </div>
      </main>
    </WhiteContainer>
  );
};

export default contact;
