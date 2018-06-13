import React from "react";
import classes from "./Maintext.css";
const maintext = props => {
  return (
    <div className={classes.Maintext}>
          <h1>WELCOME TO <span>SACHA SAMARPAN</span> </h1>
      <hr />
      <div className={classes.content}>
        <span className={classes.main}><strong>"UMEED - A DROP OF HOPE"</strong> IS A YOUTH CLUB FORMED BY YOUTHS OF THE NATION,
        THE BASIC MOTTO OF WHICH IS SOCIAL SERVICE. BESIDES THE MAIN MOTTO, THE
        BASIC IDEA OF SUCH A FORMATION IS TO HELP EACH AND EVERY HUMAN BEING WHO
        NEEDS HELP.</span> <p>Umeed works for education for needy children who are under
        difficult circumstances, such as child labour, children of poorest of
        the parents, children inflicted and affected with HIV/AIDS, street and
        runaway children, children with rare disabilities, disaster struck
        children and slum children. Special emphasis is given on girl education
        and women education, so that they and their families get empowered.</p>
      </div>
      <div className={classes.Memberform}>
        <h3>DOWNLOAD OUR MEMBERSHIP FORM</h3>
        <button>DOWNLOAD NOW</button>
      </div>
    </div>
  );
};

export default maintext;
