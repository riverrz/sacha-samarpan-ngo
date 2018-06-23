import React from "react";
import classes from "./Founders.css";
const founders = props => {
  return (
    <div className={classes.foundersContainer}>
      <h1>
        Our <span>Founders</span>
      </h1>
      <div className={classes.founder}>
        <figure className={classes.figure}>
          <img
            src="/images/founders/founder1.JPG"
            alt="Founder"
            className={classes.founderPhoto}
          />
        </figure>
        <div className={classes.foundersInfo}>
          <h2 className={classes.designation}>President</h2>
          Nauratna Gupta is the President of Saccha Samarpan Society. He has 15
          years of experience in Politics, Social Work and Business. He is
          dedicated towards providing quality education to all poor child and
          motivate them for their future desires. He worked with NGOs, Nishant
          Nirala Educational & Welfare Society as a social worker to promote
          education in rural areas. He is the Director of Shri Kalka
          Construction Company.
        </div>
      </div>
      <div className={classes.founder}>
        <figure className={classes.figure}>
          <img
            src="/images/founders/founder2.jpg"
            alt="Founder"
            className={classes.founderPhoto}
          />
        </figure>
        <div className={classes.foundersInfo}>
          <h2 className={classes.designation}>General Secretary</h2>
          Reena Sharma is the General Secretory of Saccha Samarpan Society. She
          has taken an initiative to educate the child and supporting the women
          equality. She is the Director of Mahila Training Institue (MTI).She
          has worked with many NGOs for the bettlement of the society regarding
          Women Empowerment and Child Education.She has 20 year of experience in
          Social Workand Teaching different Vocational courses in different NGOs
          and Institute.
        </div>
      </div>
    </div>
  );
};

export default founders;
