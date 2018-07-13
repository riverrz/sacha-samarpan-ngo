import React, { Component } from "react";
import Member from "./Member/Member";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import classes from "./Team.css";
class Team extends Component {
  state = {
    member: [
      {
        name: "Shivam Kumar",
        designation: "Website Developer, Manager",
        photo: "/images/Team/Shivam.jpg",
        description:
          "A law graduate form LL.M. – National Law University, Jodhpur with 17+ years of experience on Child Rights, Women’s Rights, Access to Justice, Legal Aid and Legal Empowerment. He has worked with NOG’s like Global Rights, Child Rights and You (CRY) and has actively worked on various aspects of Child Protection – child sexual abuse, child trafficking, child labour and child marriage. He has worked with United Nations Development Programme (UNDP) and Ministry of Law and Justice, Government of India for implementation of a Project on “Access to Justice” for Marginalized People in eight Indian states – Bihar, Chhattisgarh, Jharkhand, Madhya Pradesh, Maharashtra, Orissa, Rajasthan and Uttar Pradesh. Since March 2017, he is associated with UNICEF as a Consultant on Child Protection. He recently facilitated Swami Vivekananda State Police Academy, Barrack pore, West Bengal, in strengthening Child Protection training of police officials. Presently, he is aiding UNICEF in Uttar Pradesh in Strengthening Child Protection Systems."
      },
      {
        name: "Shivam Kumar",
        designation: "Website Developer, Manager",
        photo: "/images/Team/Shivam.jpg",
        description:
          "A law graduate form LL.M. – National Law University, Jodhpur with 17+ years of experience on Child Rights, Women’s Rights, Access to Justice, Legal Aid and Legal Empowerment. He has worked with NOG’s like Global Rights, Child Rights and You (CRY) and has actively worked on various aspects of Child Protection – child sexual abuse, child trafficking, child labour and child marriage. He has worked with United Nations Development Programme (UNDP) and Ministry of Law and Justice, Government of India for implementation of a Project on “Access to Justice” for Marginalized People in eight Indian states – Bihar, Chhattisgarh, Jharkhand, Madhya Pradesh, Maharashtra, Orissa, Rajasthan and Uttar Pradesh. Since March 2017, he is associated with UNICEF as a Consultant on Child Protection. He recently facilitated Swami Vivekananda State Police Academy, Barrack pore, West Bengal, in strengthening Child Protection training of police officials. Presently, he is aiding UNICEF in Uttar Pradesh in Strengthening Child Protection Systems."
      }
    ]
  };
  render() {
    const allMembers = this.state.member.map((member, id) => {
      return (
        <Member
          name={member.name}
          designation={member.designation}
          photo={member.photo}
          description={member.description}
          key={id}
        />
      );
    });

    return (
      <WhiteContainer>
        <h1 className={classes["team__heading--primary"]}>Our Team</h1>
        {allMembers}
      </WhiteContainer>
    );
  }
}

export default Team;
