import React, { Component, Fragment } from "react";
import "./InnerList.css";

class InnerList extends Component {
  state = {
    visible: false
  };
  toggleListHandler = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible
      };
    });
  };
  render() {
    let listClass = "InnerList--hidden";
    if (this.state.visible) {
      listClass = "InnerList--visible";
    }
    return (
      <Fragment>
        <span onClick={this.toggleListHandler} className="InnerList__heading">{this.props.heading}</span>
        <ul className={`InnerList__list ${listClass}`}>{this.props.children}</ul>
      </Fragment>
    );
  }
}

export default InnerList;
