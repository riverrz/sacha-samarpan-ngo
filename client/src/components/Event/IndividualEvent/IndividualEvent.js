import React, { Component } from "react";
import "./IndividualEvent.css";
import axios from "axios";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import MDSpinner from "react-md-spinner";
import Error from "../../Error/Error";
import { Carousel } from "react-responsive-carousel";

const settings = {
  showStatus: false,
  infiniteLoop: true,
  showThumbs: false,
  autoPlay: true,
  stopOnHover: false,
  interval: 6000,
  showIndicators: false,
  useKeyboardArrows: true,
  swipeable: true,
  width: window.innerWidth > 600 ? "50vw" : "90vw"
};

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
    error: false,
    notFound: false
  };
  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `/fetch/event/${this.props.match.params.eventId}`
      );
      if (data.error) {
        this.setState({
          loading: false,
          notFound: true
        });
      } else {
        this.setState({
          loading: false,
          ...data,
          date: new Date(data.date).toDateString()
        });
      }
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
    } else if (this.state.notFound) {
      content = (
        <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
          No Event found with this id
        </h2>
      );
    } else {
      const images = this.state.image.map((img ,i) => (
        <div className="individualEvent__imgContainer" key={i}>
          <img
            src={`/uploads/${img}`}
            alt="Event"
            className="individualEvent__img"
          />
        </div>
      ))
      content = (
        <div className="individualEvent__container">
          <Carousel {...settings}>
            {images}
          </Carousel>
          <div className="individualEvent__detailsContainer">
            <h1 className="individualEvent__heading">{this.state.subject}</h1>
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
