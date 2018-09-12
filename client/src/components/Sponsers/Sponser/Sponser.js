import React, { Component } from "react";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import "./Sponser.css";

class Sponser extends Component {
  state = {
    sponsers: [
      { logo: "1.png", description: "", address: "" },
      { logo: "2.jpg", description: "", address: "" },
      { logo: "3.png", description: "", address: "" },
      { logo: "4.jpg", description: "", address: "" },
      { logo: "5.jpg", description: "", address: "" }
    ]
  };
  render() {
    const queryString = this.props.location.search;
    const params = new URLSearchParams(queryString);
    let selectedSponser = 0;
    if (params.has("number")) {
      const passedSponser = Number(params.get("number"));
      if (passedSponser < 5 && passedSponser > -1) {
        selectedSponser = passedSponser;
      }
    }
    return (
      <WhiteContainer style={{ height: "60vh" }}>
        <div className="sponser__container">
          <div className="sponser__logo__container">
            <img
              src={
                "/images/sponsers/" + this.state.sponsers[selectedSponser].logo
              }
              alt="Sponser"
              className="sponser__logo"
            />
          </div>
        </div>
      </WhiteContainer>
    );
  }
}

export default Sponser;
