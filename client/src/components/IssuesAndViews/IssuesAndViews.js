import React from "react";
import { Fade } from "react-reveal";
import "./IssuesAndViews.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
const issuesAndViews = props => {
  const style = {
    textAlign: "left",
    paddingLeft: "4rem"
  };
  return (
    <WhiteContainer style={style}>
      <div className="issues__content">
        <h1>Issues</h1>
        <Fade bottom>
          <p>
            In many parts of India, the birth of a girl child is not welcomed.
            Right from her arrival, she faces discrimination, humiliation, and
            oppression at every stage of life. When it comes to healthcare,
            education and growth opportunities, she is neglected because of her
            gender. Some manage to survive and foster new paths to follow. Most,
            however, surrender hopelessly to the sad fate assigned to them.
          </p>
          <p>
            In a country rife with gender inequalities and an underlying nature
            of patriarchy, girl children often find themselves at the short end
            of the stick. Discrimination against girls is rampant and due to the
            fear of abuse and exploitation, they are kept at home and not sent
            to school. Child marriage is yet another glaring issue due to which
            girls are forced to give up going to school at an early age.
          </p>
          <p>
            The issue of girl child rights and protection in India is a very
            serious concern. Being home to more than one third of the 10 million
            child brides in the world, India has one of the highest numbers of
            girls forced into marriage before the legal age of 18. If one half
            of our society remain so vulnerable to violence and neglect, how
            will the country advance or progress? Not only are they unsafe at
            home where they are victims of stereotypical attitude, but also in
            learning environments. Ill-equipped schools that lack separate
            toilets for girls are one of the major deterrents for parents not
            willing to send their girls to study. The few who manage to attend
            school risk violence and abuse. According to India’s 2011 census,
            53% households and 11% schools had no toilets. This lack of safety
            deprives young girls of an opportunity to educate themselves and
            better their lives.
          </p>
          <h1>Views</h1>
          <p>
            In order to make sure that girl children get access to quality
            education, we need to tackle the mindset that makes it okay for
            young children to be employed. Girl Child Rights are being
            aggressively advocated in the country by individuals, governmental
            organisations and many NGOs.
          </p>
          <p>
            We want to be part of a world where girls are celebrated. Where they
            are treated equally, with love and respect. What is urgently
            required in society today is a change of attitude. Girls must be
            given the same opportunities and protection as boys, and must be
            treated at par. A girl’s childhood can and must be preserved,
            cherished, nurtured and protected. Because she has the right to
            survive, develop, be protected and participate in decisions that
            impact her life
          </p>
        </Fade>
        <p>Saccha Samarpan fight for the girl child in India include:</p>
        <ul className="issues__resolvesList">
          <li>
            <i className="fas fa-angle-right" />
            Education that helps create attitudinal shifts that emphasise the
            rights of a girl child
          </li>
          <li>
            <i className="fas fa-angle-right" />
            Breaking myths and stereotypes around gender
          </li>
          <li>
            <i className="fas fa-angle-right" />
            Ensuring State accountability to implement various schemes,
            policies, laws, constitutional guarantees and international
            commitments
          </li>
          <li>
            <i className="fas fa-angle-right" />
            Building women leaders from the community through sensitisation
            programmes that help them understand their rights and ensure it for
            girls and women like them.
          </li>
        </ul>
      </div>
    </WhiteContainer>
  );
};

export default issuesAndViews;
