import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

import "./Advisors.css";

const data = [
  {
    img: "/images/Advisors/advisor-1.jpeg",
    name: "Shyam Jaju",
    designation: "National Vice President of BJP",
    details:
      "Shyam Jaju (born 29 December 1957) is an Indian politician and the current National Vice President of the Bharatiya Janata Party (BJP) since 2014. He always encouraged our ngo to do great work in the social issues and gives his significant advises to  achieve targets enthusiastically."
  },
  {
    img: "/images/Advisors/advisor-2.jpeg",
    name: "Sh.Ramchandra Shingare",
    designation: "SDM(Saket)",
    details:
      "He always stands besides us and improve our work with his immense administrative  knowledge and gives us a straight and best path to deal with the sorrows of society."
  }
];

const advisors = () => (
  <WhiteContainer>
    <h1 className="advisors__heading--primary">Our Advisors</h1>
    <div className="advisors__container">
      <ul className="advisors__list">
        {data.map(({ name, details, designation, img }) => (
          <li key={name} className="advisors__listItem">
            <div className="advisors__picContainer">
              <img src={img} alt="Advisor Pic" className="advisors__pic" />
            </div>
            <div className="advisors__detailsContainer">
              <h3 className="advisors__heading--secondary">{name}</h3>
              <p className="advisors__designation">{designation}</p>
              <p className="advisors__details">{details}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </WhiteContainer>
);

export default advisors;
