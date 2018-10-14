import React, { Component } from "react";
import "./IndividualEvent.css";
import axios from "axios";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import MDSpinner from "react-md-spinner";
import Error from "../../Error/Error";

class IndividualEvent extends Component {
  state = {
    _id: "",
    timings: "",
    date: null,
    venue: "",
    subject: "",
    image: "",
    description: "",
    loading: true,
    error: false
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `/events/fetch/${this.props.match.params.eventId}`
      );
      this.setState({
        loading: false,
        ...data,
        date: new Date(data.date).toDateString()
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false
      });
    }
  }
  render() {
    let content;
    if (this.state.loading) {
      content = <MDSpinner size="45" />;
    } else if (this.state.error) {
      content = <Error />;
    } else {
      content = (
        <div className="individualEvent__container">
          <div className="individualEvent__imgContainer">
            <img
              src={`/uploads/${this.state.image}`}
              alt="Event"
              className="individualEvent__img"
            />
          </div>
          <div className="individualEvent__detailsContainer">
            <h1 className="individualEvent__heading">
              {this.state.subject}
            </h1>
            <ul className="individualEvent__list">
              <li className="individualEvent__list__item">
                <strong>Date: </strong>
                <span className="individualEvent__list__span">
                  {this.state.date}
                </span>
              </li>
              <li className="individualEvent__list__item">
                <strong>Timings: </strong>
                <span className="individualEvent__list__span">
                  {this.state.timings ? this.state.timings : "--"}
                </span>
              </li>
              <li className="individualEvent__list__item">
                <strong>Venue: </strong>
                <span className="individualEvent__list__span">
                  {this.state.venue}
                </span>
              </li>
            </ul>
            <p className="individualEvent__description">
              {this.state.description}
            </p>
          </div>
        </div>
      );
    }
    return (
      <WhiteContainer style={{ minHeight: "40vh" }}>{content}</WhiteContainer>
    );
  }
}

export default IndividualEvent;
