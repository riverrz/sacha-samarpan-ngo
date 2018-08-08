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

      </main>
    </WhiteContainer>
  );
};

export default contact;
