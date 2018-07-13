import React from "react";
import  "./Importantlinks.css";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";

const importantlinks = props => {
  const style = {
    textAlign: "left",
    paddingLeft: "4rem"
  };
  return (
    <WhiteContainer style={style}>
      <div className="importantLinks__container">
        <h2 className='importantLinks__heading'>Important Links</h2>
        <hr className='importantLinks__HR' />
        <ul className='importantLinks__linksList'>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.wcd.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministry of Women and Child Development, MWCD – Govt. of India
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://mhrd.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Ministry of Human Resource Development, MHRD – Govt. of India
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://ncpcr.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NCPCR – National Commission for Protection of Child Rights
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://nipccd.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIPCCD – National Institute of Public Cooperation and Child
              Development
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://nalsa.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NALSA – National Legal Services Authority
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.childlineindia.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CIF – Childline India Foundation
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="https://www.youtube.com/watch?v=CwzoUnj0Cxc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Komal – An Awareness Video for Children on CSA
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.nimhans.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              NIMHANS – National Institute of Mental Health and Neurosciences
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://haqcrc.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>HAQ</em>&nbsp;Centre for Child Rights (HAQCRC)
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.tulir.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TULIR- Centre for the Prevention and Healing Child Sexual Abuse
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.bba.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bachpan Bachao Andolan
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://arpan.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Arpan
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.aarambh.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aarambh
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.salaambaalaktrust.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Salaam Balak Trust
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a href="http://www.rahifoundation.org/">Rahi Foundation</a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.pratham.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pratham Education Foundation
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="https://www.cry.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Child Rights and You
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://www.teachforindia.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Teach For India
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://ccs.in/bpsreport"
              target="_blank"
              rel="noopener noreferrer"
            >
              Center for Civil Society
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="http://trackthemissingchild.gov.in/trackchild/index.php"
              target="_blank"
              rel="noopener noreferrer"
            >
              Track the Missing Child
            </a>
          </li>
          <li>
            <i className="fas fa-angle-right" />{" "}
            <a
              href="https://pencil.gov.in/Complaints/add"
              target="_blank"
              rel="noopener noreferrer"
            >
              Platform for Effective Enforcement for No Child Labour ( PENCIL )
            </a>
          </li>
        </ul>
      </div>
    </WhiteContainer>
  );
};

export default importantlinks;
