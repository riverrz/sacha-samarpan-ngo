import React from "react";
import "./Founders.css";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
const founders = props => {
  return (
    <WhiteContainer>
      <h1 className="founders__heading--primary">
        Our <span className="founders__headingSpan">Founders</span>
      </h1>
      <div className="founder">
        <div className="founders__left">
          <figure className="founder__figure">
            <img
              src="/images/founders/founder1.JPG"
              alt="Founder"
              className="founder__photo"
            />
          </figure>
          <Zoom cascade>
            <div className="founder__contact">
              <a
                href="https://www.facebook.com/NauratnaGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="founder__iconContainer"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="founder__icon"
                />
              </a>
              <a
                href="https://www.twitter.com/NauratnaGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="founder__iconContainer"
              >
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="founder__icon"
                />
              </a>
              <a
                href="https://www.instagram.com/NauratnaGupta/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder__iconContainer"
              >
                <img
                  src="/instagram.png"
                  alt="Instagram"
                  className="founder__icon"
                />
              </a>
            </div>
          </Zoom>
        </div>
        <div className="founder__info">
          <h2>Nauratna Gupta</h2>
          <h3 className="founder__designation">President</h3>
          Nauratna Gupta is the President of Saccha Samarpan Society. He is the
          <strong>
            {" "}
            Member of ZRUCC in Railway Ministry (Government of India).
          </strong>{" "}
          <p>
            He is well qualified and holds his Masters degree in Master in
            Social Work (MSW). He has more than 18 years of experience in Social
            Work, Politics and Business. He is dedicated towards providing
            quality education to all poor children and motivates them for their
            future desires. He has worked with many NGO’s for the enhancement of
            the society regarding Women Empowerment and Child Education. He is
            also the Director of “Shri Kalka Construction Company”.
          </p>
          <div className="founder__readMoreContainer">
            <button className="founder__readMoreButton">
              <Link to="/founder-1" exact>
                Read More <span className="founder__arrow">→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="founder">
        <div className="founders__left">
          <figure className="founder__figure">
            <img
              src="/images/founders/founder2.jpg"
              alt="Founder"
              className="founder__photo"
            />
          </figure>
          <Zoom cascade>
            <div className="founder__contact">
              <a
                href="https://www.facebook.com/Reenasharma53"
                className="founder__iconContainer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/facebook.png"
                  alt="Facebook"
                  className="founder__icon"
                />
              </a>
              <a className="founder__iconContainer">
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="founder__icon"
                />
              </a>
            </div>
          </Zoom>
        </div>

        <div className="founder__info">
          <h2>Reena Sharma</h2>
          <h3 className="founder__designation">General Secretary</h3>
          <p>
            Reena Sharma is the General Secretary of Saccha Samarpan Society.
            She is professionally qualified and holds her Masters degree in
            Master in Social Work (MSW). She has taken an initiative to educate
            children and support the women equality. She is the Chairperson of
            Mahila Training Institute (MTI). She has worked with Nishant Nirala
            Educational and welfare Society as a social worker to promote
            education in rural areas. She has 20 year of experience in Social
            Work and Teaching different Vocational courses in different NGOs and
            Institute.
          </p>
          <div className="founder__readMoreContainer">
            <button className="founder__readMoreButton">
              <Link to="/founder-2" exact>
                Read More <span className="founder__arrow">→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </WhiteContainer>
  );
};

export default founders;
