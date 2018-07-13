import React from "react";
import classes from "./Founders.css";
import { Link } from "react-router-dom";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
const founders = props => {
  return (
    <WhiteContainer>
      <h1>
        Our <span>Founders</span>
      </h1>
      <div className={classes.founder}>
        <div className={classes.founder__left}>
          <figure className={classes.figure}>
            <img
              src="/images/founders/founder1.JPG"
              alt="Founder"
              className={classes.founderPhoto}
            />
          </figure>
          <div className={classes.founders__contact}>
            <a
              href="https://www.facebook.com/NauratnaGupta"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.iconContainer}
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className={classes.icon}
              />
            </a>
            <a
              href="https://www.twitter.com/NauratnaGupta"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.iconContainer}
            >
              <img src="/twitter.png" alt="Facebook" className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={classes.foundersInfo}>
          <h2>Nauratna Gupta</h2>
          <h3 className={classes.designation}>President</h3>
          Nauratna Gupta is the President of Saccha Samarpan Society. He is the
          <strong>
            {" "}
            Member of ZRUCC in Railway Ministry (Government of India).
          </strong>{" "}
          He is well qualified and holds his Masters degree in Master in Social
          Work (MSW). He has more than 18 years of experience in Social Work,
          Politics and Business. He is dedicated towards providing quality
          education to all poor children and motivates them for their future
          desires. He has worked with many NGO’s for the enhancement of the
          society regarding Women Empowerment and Child Education. He is also
          the Director of “Shri Kalka Construction Company”.
          <div className={classes.readMoreContainer}>
            <button className={classes.readMoreButton}>
              <Link to="/founder-1" exact>
                Read More <span className={classes.arrow}>→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className={classes.founder}>
        <div className={classes.founder__left}>
          <figure className={classes.figure}>
            <img
              src="/images/founders/founder2.jpg"
              alt="Founder"
              className={classes.founderPhoto}
            />
          </figure>
          <div className={classes.founders__contact}>
            <a
              href="/"
              className={classes.iconContainer}
            >
              <img
                src="/facebook.png"
                alt="Facebook"
                className={classes.icon}
              />
            </a>
            <a
              href="/"
              className={classes.iconContainer}
            >
              <img src="/twitter.png" alt="Facebook" className={classes.icon} />
            </a>
          </div>
        </div>
        <div className={classes.foundersInfo}>
          <h2>Reena Sharma</h2>
          <h3 className={classes.designation}>General Secretary</h3>
          Reena Sharma is the General Secretary of Saccha Samarpan Society. She
          is professionally qualified and holds her Masters degree in Master in
          Social Work (MSW). She has taken an initiative to educate children and
          support the women equality. She is the Chairperson of Mahila Training
          Institute (MTI). She has worked with Nishant Nirala Educational and
          welfare Society as a social worker to promote education in rural
          areas. She has 20 year of experience in Social Work and Teaching
          different Vocational courses in different NGOs and Institute.
          <div className={classes.readMoreContainer}>
            <button className={classes.readMoreButton}>
              <Link to="/founder-2" exact>
                Read More <span className={classes.arrow}>→</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </WhiteContainer>
  );
};

export default founders;
