import React, { Component } from "react";
import { Zoom } from "react-reveal";
import WhiteContainer from "../../../containers/WhiteContainer/WhiteContainer";
import "./Sponser.css";

class Sponser extends Component {
  state = {
    sponsers: [
      {
        logo: "1.png",
        title:
          "Shri Kalka Construction Company, formerly known as Global Engineers and Contractors,was established by Mr.Nauratna Gupta in the year 2006.",
        since: "2006",
        description:
          "Shri Kalka Construction Company has lead and worked as an integral part of many ventures in developing integrated townhouses, group housing, shopping malls, multiplexes, hotels and IT parks. This company is the main pillar of Saccha Samarpan NGO which provides and allocates all the beneficial resources to the Organisation.",
        address:
          "C-53, G. F. Jawahar Park, Devli Road, Khanpur, New Delhi-110080",
        name: "Shri Kalka Construction Company",
        phone1: "9212580053",
        email: "skcc2006@yahoo.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.031520288385!2d77.229329975858!3d28.507750995595284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a2c2ae96d5%3A0x980a1b570c0cedeb!2sSHRI+KALKA+CONSTRUCTION+CO.!5e0!3m2!1sen!2sin!4v1537898591501"
      },
      {
        logo: "2.jpg",
        title:
          "At MTI, its main aim is to create infinite possibilities for our students through high quality education, guidance and academic excellence",
        since: "2000",
        description:
          "MTI provides various courses for woman like Cutting and Tailoring, Dress Designing, Fashion Designing, Beauty Culture, Computer Course and many more. Its main motto is to educate and empower women.Along this, it plays a vital role in Saccha Samarpan NGO and taken an initiative to help and support the Organisation to its best.",
        address: "C-14/2 Jawahar Park, Devli Road, Khanpur, New Delhi-110080",
        name: "Mahila Training Institute",
        phone1: "9212180053",
        email: "mti2000@rediffmail.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.119140935912!2d77.22824095055613!3d28.506062982381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a33d8ed9b5%3A0xbd36fa4d47458ebd!2sMahila+Training+Institute!5e0!3m2!1sen!2sin!4v1531673041841"
      },
      {
        logo: "3.png",
        title:
          "Ayurvedic Treatment for Hair loss, Weakness in any mode, Weight loss/Gain, Sexual Problems & Female or male Infertility.",
        since: "2003",
        description:
          "Dr. Anoop Kumar Gupta provides all the medical support to Saccha Samarpan NGO. He is also our medical advisor. His medical knowledge is very valuable to our NGO.",
        address: "ED 47, New Ashok Nagar, New Delhi-110096",
        name: "Sanjeevan Clinic",
        phone1: "9818984848",
        email: "Anoop12006@gmail.com"
      },
      {
        logo: "4.jpg",
        title:
          "All types of N.C.E.R.T Books, stationary and sports items are available.Wholesaler and Retailer",
        since: "1984",
        description:
          "Goyal Book Depot plays an important role in Saccha Samarpan NGO. They support and provide many resources to the organization to accomplish their mission.",
        address: "A-17/2, Jawahar Park, Devli Road, Khanpur, New Delhi-110080",
        name: "Goyal Book Depot And Sports",
        phone1: "9718007007",
        phone2: "9810660830",
        email: "Abhayngfs2000@gmail.com"
      },
      {
        logo: "5.jpg",
        title:
          "All types of Undergarment, Lowers, T-Shirts, Gowns, Plazo. One of the best Retail Shop for garments.",
        since: "2010",
        description:
          "Aggarwal Undergarment is a major partner and plays a productive role to enhance the growth of the society by helping and supporting Saccha Samarpan NGO.",
        address: "A-16, Jawahar Park, Devli Road, Khanpur, New Delhi-110080",
        name: "Aggarwal Undergarments",
        phone1: "9911111475",
        phone2: "9911111475",
        email: "Aggarwalgarments73@gmail.com"
      }
    ]
  };
  render() {
    const queryString = this.props.location.search;
    const params = new URLSearchParams(queryString);
    let selectedSponserIndex = 0;
    if (params.has("number")) {
      const passedSponser = Number(params.get("number"));
      if (passedSponser < 5 && passedSponser > -1) {
        selectedSponserIndex = passedSponser;
      }
    }
    let selectedSponser = this.state.sponsers[selectedSponserIndex];
    return (
      <WhiteContainer style={{ backgroundColor: "#fff" }}>
        <div className="sponser__container">
          <Zoom>
            <div className="sponser__logo__container">
              <img
                src={"/images/sponsers/" + selectedSponser.logo}
                alt="Sponser"
                className="sponser__logo"
              />
            </div>
          </Zoom>
          <div className="sponser__details__container">
            <h1 className="sponser__heading--primary">
              {selectedSponser.name}
            </h1>
            <h2 className="sponser__heading--secondary">
              Since {selectedSponser.since}
            </h2>
            <h3 className="sponser__heading--tertiary">
              {selectedSponser.title}
            </h3>
            <p className="sponser__content sponser__content--border">
              {selectedSponser.description}
            </p>
            <div className="sponser__contact__container">
              <h4 className="sponser__heading--quaternary">Address</h4>
              <p className="sponser__content">{selectedSponser.address}</p>
            </div>
            <div className="sponser__contact__container">
              <h4 className="sponser__heading--quaternary">Phone No:</h4>
              <a
                href={`tel:+91${selectedSponser.phone1}`}
                className="sponser__links"
              >
                {selectedSponser.phone1 + " "}
              </a>
              <a
                href={`tel:+91${selectedSponser.phone2}`}
                className="sponser__links"
              >
                {selectedSponser.phone2 ? " , " + selectedSponser.phone2 : null}
              </a>
            </div>
            <div className="sponser__contact__container">
              <h4 className="sponser__heading--quaternary">Email Address:</h4>
              <a
                href={`mailto:${selectedSponser.email}`}
                className="sponser__links"
              >
                {selectedSponser.email}
              </a>
            </div>
          </div>
          <Zoom>
            <div className="sponser__map__container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.119140935912!2d77.22824095055613!3d28.506062982381827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a33d8ed9b5%3A0xbd36fa4d47458ebd!2sMahila+Training+Institute!5e0!3m2!1sen!2sin!4v1531673041841"
                frameBorder="0"
                allowFullScreen
                title="sp-map"
                className="sponser__map"
              />
            </div>
          </Zoom>
        </div>
      </WhiteContainer>
    );
  }
}

export default Sponser;
