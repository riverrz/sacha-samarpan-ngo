import React, { Component } from "react";
import Member from "./Member/Member";
import WhiteContainer from "../../containers/WhiteContainer/WhiteContainer";
import "./Team.css";
class Team extends Component {
  state = {
    member: [
      {
        name: "Rajat Sharma",
        designation: "Co-ordinator",
        photo: "/images/Team/Rajat.jpeg",
        facebook: "https://www.facebook.com/justcoolrajatsharma",
        description:
          "Rajat Sharma is a well qualified degree holder in B.Tech Computer Science from Jamia Hamdard University. He works as a Computer Teacher in Saccha Samarpan Ngo for the bettlement of child Education. He has taken an initiative of improving child education and giving them the best knowledge and ideas for their bright future."
      },
      {
        name: "Shivam Kumar",
        designation: "Website Developer, Maintainer",
        photo: "/images/Team/Shivam.jpg",
        facebook: "https://www.facebook.com/shivam.kumar.79",
        description:
          "Shivam Kumar is a qualified degree holder in B.Tech Information Technology from Maharaja Agrasen Institute Of Technology with a good experience in the field of Web Technologies. He is the developer of this site and responsible for maintaining the site to allow visitors to get all the proper knowledge about our events, programs and internships."
      },
      {
        name: "Rohit Shukla",
        designation: "Volunteer",
        photo: "/images/Team/Rohit.jpeg",
        facebook: "https://www.facebook.com/rohit.shukla.792",
        description:
          "I am Rohit Shukla. I have completed my MA in History from Delhi University with first Division. I am also RBI certified from Indian Institute Of Banking and Finance. I have also qualified many competitive exams like CDS,CGL,CISF,ITBP, Delhi Police and Banking, and presently running an competitive exam Institute and hope to teach free of cost in Saccha Samarpan. My vision is that no child is left behind in field of education because of financial deprivation."
      },
      {
        name: "Aman Gupta",
        designation: "Volunteer",
        photo: "/images/Team/Aman.jpeg",
        facebook: "https://www.facebook.com/AmanGupta0307",
        description:
          "Aman Gupta devotes all his hardwork,Diligence to this organisation  and  believe in educating child all over the world.He has worked with many NGOs and done a brilliant job everywhere. "
      },
      {
        name: "Koushal Arora",
        designation: "Volunteer",
        photo: "/images/Team/Koushal.jpeg",
        facebook: "https://www.facebook.com/kaushal.arora.796",
        description:
          "Before you give up on yourself remember what your parents gave to just get you where you are. Kaushal Arora is a qualified degree holder in B.Tech computer Science from Jamia Hamdard University. He devotes all his kindness and hardwork  to the organisation."
      },
      {
        name: "Umesh Rajput",
        designation: "Volunteer",
        photo: "/images/Team/Umesh.jpeg",
        facebook: "https://www.facebook.com/UmeshRajput43",
        description:
          "He is one of the most hardworking person of Saccha Samarpan Ngo. He uplifts many issues regarding child education and women empowerment. His main objective is to develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of professions."
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
          facebook={member.facebook}
        />
      );
    });

    return (
      <WhiteContainer style={{ paddingBottom: "8%" }}>
        <h1 className="team__heading--primary">Our Team</h1>
        {allMembers}
      </WhiteContainer>
    );
  }
}

export default Team;
