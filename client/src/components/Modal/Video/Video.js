import React from "react";
import "./Video.css";
import ExitButton from "../ExitButton/ExitButton";

const video = props => {
  return (
    <div className="video__videoContainer">
      <iframe
        className="video__video"
        title="pvr"
        frameBorder="0"
        src="https://www.youtube.com/embed/MG7dW2gChOs"
        allowFullScreen
      />
      <ExitButton />
    </div>
  );
};

export default video;
