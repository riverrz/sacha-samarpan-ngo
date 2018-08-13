import React from "react";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

import "./Advisors.css";

const advisors = () => (
  <WhiteContainer>
    <h1 className="advisors__heading--primary">Our Advisors</h1>
    <div className="advisors__container">
      <ul className="advisors__list">
        <li className="advisors__listItem">
          <div className="advisors__picContainer">
            <img
              src="/images/dummy-advisor.png"
              alt="Advisor Pic"
              className="advisors__pic"
            />
          </div>
          <div className="advisors__detailsContainer">
            <h3 className="advisors__heading--secondary">Dummy</h3>
            <p className="advisors__designation">
              IPS Officer, MLA
            </p>
            <p className="advisors__details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quaerat corrupti sapiente dicta magnam accusantium eos excepturi
              consequuntur molestias voluptatem? Ratione aliquid incidunt
              molestias nesciunt et aliquam beatae cupiditate mollitia.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quaerat corrupti sapiente dicta magnam accusantium eos excepturi
              
            </p>
          </div>
        </li>
        <li className="advisors__listItem">
          <div className="advisors__picContainer">
            <img
              src="/images/dummy-advisor.png"
              alt="Advisor Pic"
              className="advisors__pic"
            />
          </div>
          <div className="advisors__detailsContainer">
            <h3 className="advisors__heading--secondary">Dummy</h3>
            <p className="advisors__designation">
              IPS Officer, MLA
            </p>
            <p className="advisors__details">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quaerat corrupti sapiente dicta magnam accusantium eos excepturi
              consequuntur molestias voluptatem? Ratione aliquid incidunt
              molestias nesciunt et aliquam beatae cupiditate mollitia.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              quaerat corrupti sapiente dicta magnam accusantium eos excepturi
              
            </p>
          </div>
        </li>
      </ul>
    </div>
  </WhiteContainer>
);

export default advisors;
