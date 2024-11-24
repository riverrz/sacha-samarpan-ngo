import React from "react";
import "./Donate.css";
import DonateLogo from "../../assets/Icons/donation-1.png";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

const donate = props => {
  return (
    <WhiteContainer>
      <div className="donate__headingContainer">
        <h1 className="donate__heading">
          Thank You For{" "}
          <span className="donate__heading__span">Your Support</span>
          <div className="donate__logoBox">
            <img src={DonateLogo} alt="Donation-1" className="donate__logo" />
          </div>
          <hr className="donate__horizontal" />
        </h1>
      </div>
      {/* <form autoComplete="off" className='donate__form'>
        <Inputfield type="text" placeholder="Name:" iconClass="fas fa-user" />
        <Inputfield
          type="email"
          placeholder="Email Address"
          iconClass="fas fa-envelope"
        />
        <Inputfield type="text" placeholder="Phone:" iconClass="fas fa-phone" />
        <Inputfield
          type="text"
          placeholder="PAN Number"
          iconClass="fas fa-address-card"
        />
        <div className='donate__address__container'>
          <textarea
            placeholder="Address:"
            className='donate__address'
          />
        </div>
        <Inputfield
          type="text"
          placeholder="Amount(Rs)"
          iconClass="fas fa-rupee-sign"
        />
        <div className='donate__button__container'>
          <button className='donate__button'>Donate</button>
        </div>
      </form> */}
      <div className="donation__details__container">
        <h3>Given below are our details</h3>
        <p><strong>Name:- </strong> SACCHA SAMARPAN </p>
        <p><strong>A/C No.:- </strong> 5120101003663</p>
        <p><strong>IFSC:- </strong> CNRB0005120 </p>
        <p><strong>Address:- </strong> CANARA BANK, KHANPUR, BRANCH, NEW DELHI </p>

        <p><strong>PAN No.:- </strong> AATAS1911L</p>
        <p><strong>Paytm:- </strong> 9211807677 </p>
      </div>
      <div className="donate__conditionsContainer">
        <h1 className="donate__conditionsHeading">Terms & Conditions</h1>
        <ul className="donate__conditionsList">
          <li>
            Refund Policy:- If customer paid twice for one transaction, the one
            transaction amount will be refunded via same source within 07 to 10
            working days
          </li>
          <li>
            After donation process a Unique transaction referenace number and
            transaction ID will be in donation slip.
          </li>
        </ul>
      </div>
    </WhiteContainer>
  );
};

export default donate;
