import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import MDSpinner from "react-md-spinner";

const loading = props => (
  <WhiteContainer style={{ minHeight: "40vh", textAlign: "center" }}>
    <MDSpinner />
  </WhiteContainer>
);

export default loading;
