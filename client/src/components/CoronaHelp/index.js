import React from "react";
import { Fade } from "react-reveal";
import "./index.css"
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

const CoronaHelp = (props) => {
  const style = {
    textAlign: "left",
    paddingLeft: "4rem",
  };
  return (
    <WhiteContainer style={style}>
      <div className="CoronaHelp__content">
        <h1>Corona Helpful links</h1>
        <Fade bottom>
          <p>
            <a href="https://www.covidvisualizer.com/">Corona Visualizer</a>
          </p>
          <p>
            <a href="https://helpline.aicte-india.org/">AICTE Helpline</a>
          </p>
          <p>
            <a href="https://www.facebook.com/SacchaSamarpanNGO">
              Our facebook page
            </a>
          </p>
        </Fade>
      </div>
    </WhiteContainer>
  );
};

export default CoronaHelp;
