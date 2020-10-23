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
          "Rajat Sharma is a well qualified degree holder in B.Tech Computer Science from Jamia Hamdard University. For the betterment of child Education, he is constantly working as a Computer Teacher in Saccha Samarpan NGO. He has taken an initiative of improving child education and giving them the best knowledge and ideas for their bright future in digital India.",
      },
      {
        name: "Shivam Kumar",
        designation: "Website Developer, Maintainer",
        photo: "/images/Team/Shivam.jpg",
        facebook: "https://www.facebook.com/shivam.kumar.79",
        description:
          "Shivam Kumar is a qualified degree holder in B.Tech Information Technology from Maharaja Agrasen Institute Of Technology. With a good experience in the field of Web Technologies. He is the developer of this website and responsible for maintaining the website to allow visitors to get all the proper insight about our events, programs and internships.",
      },
      {
        name: "Rohit Shukla",
        designation: "Volunteer",
        photo: "/images/Team/Rohit.jpeg",
        facebook: "https://www.facebook.com/rohit.shukla.792",
        description:
          "Rohit Shukla is one of the dedicated volunteer in Saccha Samarpan NGO. He has completed his MA in History from Delhi University with first Division. He is also RBI certified from Indian Institute Of Banking and Finance. He has also qualified many competitive exams like CDS, CGL, CISF, ITBP, Delhi Police and Banking, and presently running an competitive exam Institute and hope to teach free of cost in Saccha Samarpan. Rohit’s vision is that no child should be left behind in field of education because of financial deprivation.",
      },
      {
        name: "Aman Gupta",
        designation: "Volunteer",
        photo: "/images/Team/Aman.jpeg",
        facebook: "https://www.facebook.com/AmanGupta0307",
        description:
          "Aman Gupta is a devoted, hard working and diligent volunteer in this Organisation and he believes in educating children all over the world. He has worked with many NGOs and has done a brilliant job everywhere.",
      },
      {
        name: "Kaushal Arora",
        designation: "Volunteer",
        photo: "/images/Team/Kaushal.jpeg",
        facebook: "https://www.facebook.com/kaushal.arora.796",
        description:
          "Kaushal Arora is a qualified degree holder in B.Tech computer Science from Jamia Hamdard University. He devotes all his kindness and hard work to the Organisation. Before you give up on yourself remember what your parents gave to just get you where you are.",
      },
      {
        name: "Umesh Rajput",
        designation: "Volunteer",
        photo: "/images/Team/Umesh.jpeg",
        facebook: "https://www.facebook.com/UmeshRajput43",
        description:
          "Umesh Rajput is one of the most hardworking person of Saccha Samarpan NGO. He uplifts many issues regarding child education and women empowerment. His main objective is to develop human potential to its full extent so that intellectually capable and imaginatively gifted leaders can emerge themselves as professionals.",
      },
      {
        name: "Suraj Varshney",
        designation: "Volunteer",
        photo: "/images/Team/Suraj.jpeg",
        // facebook: "https://www.facebook.com/",
        description:
          "Suraj varshney is a qualified degree holder in B.A programming from Delhi University. He is a talented  graphic designer and a  Brilliant  freelance designer.He is associated with us and working for the betterment of society with an initiative to bring out a positive change in all spheres of life.",
      },
      {
        name: "Shivanki",
        designation: "Volunteer",
        photo: "/images/Team/Shivanki.jpeg",
        facebook: "",
        instagram: "https://www.instagram.com/shivirao07/",
        description: "Shivanki Volunteer",
      },
      {
        name: "Priya",
        designation: "Volunteer",
        photo: "/images/Team/Priya.jpeg",
        facebook: "https://www.facebook.com/priya.yadav.5661",
        description: "Priya Volunteer",
      },
    ],
  };
  render() {
    const allMembers = this.state.member.map((member, id) => {
      return <Member key={id} {...member} />;
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
