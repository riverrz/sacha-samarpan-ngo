import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Sponsers.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

class Sponsers extends Component {
  state = {
    sponsers: ["1.png", "2.jpg", "3.png", "4.jpg", "5.jpg"]
  };
  render() {
    const lists = this.state.sponsers.map((img, i) => (
      <li className="sponsers__listItem" key={i}>
        <Link to={{
          pathname:'/sponser',
          search:`number=${i}`
        }}>
          <img
            src={`/images/sponsers/${img}`}
            alt="sponser"
            className="sponsers__logo"
          />
        </Link>
      </li>
    ));
    return (
      <WhiteContainer style={{ backgroundColor: "#fff", padding: "5rem" }}>
        <h1 className="sponsers__heading">Our Sponsers</h1>
        <ul className="sponsers__list">{lists}</ul>
      </WhiteContainer>
    );
  }
}

export default Sponsers;
