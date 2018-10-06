import React, { PureComponent } from "react";
import "./AsideSocialBar.css";

class AsideSocialBar extends PureComponent {
  render() {
    return (
      <aside className="asideSocialBar__sideBar">
        <div className="asideSocialBar__sideBar__item  facebook--backColor">
          <a
            href="https://www.facebook.com/SacchaSamarpanNGO"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-facebook-f " />
          </a>
        </div>
        <div className="asideSocialBar__sideBar__item instagram--backColor">
          <a
            href="https://www.instagram.com/sacchasamarpan_ngo"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-instagram" />
          </a>
        </div>
        <div className="asideSocialBar__sideBar__item youtube--backColor">
          <a
            href="https://www.youtube.com/channel/UC6mMdgm7DVDwcgQUoSrWIKQ/"
            target="_blank"
            rel="noopener noreferrer"
            className="sideBar__item__link"
          >
            <i className="fab fa-youtube" />
          </a>
        </div>
        <div className="asideSocialBar__sideBar__item twitter--backColor">
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
    );
  }
}

export default AsideSocialBar;
