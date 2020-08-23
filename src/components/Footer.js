import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#1B1464" }}
      className="font-small pt-4 mt-4"
    >
      <div
        className="footer-copyright text-center py-3"
        style={{
          background: "-webkit-linear-gradient(#FFC75F, #FF9671, #FF5391)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          fontSize: 20,
        }}
      >
        <MDBContainer fluid>
          If you’d like to get in touch —{" "}
          <a
            href="mailto:damini.ganesh@gmail.com"
            target="_blank"
            style={{
              textDecoration: "line-through",
              webkitTextFillColor: "aliceblue",
            }}
          >
            email me
          </a>
        </MDBContainer>
      </div>

      <div
        className="footer-copyright text-center py-3"
        style={{
          background: "-webkit-linear-gradient(#FFC75F, #FF9671, #FF5391)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          fontSize: 20,
        }}
      >
        <MDBContainer fluid>
          <a
            href="https://www.linkedin.com/in/daminiganesh/"
            target="_blank"
            style={{ color: "aliceblue", margin: 20 }}
          >
            <FaLinkedinIn style={{ marginBottom: 25 }} />
          </a>
          <a
            href="https://github.com/dganesh07"
            target="_blank"
            style={{ color: "aliceblue", margin: 20 }}
          >
            <AiFillGithub style={{ marginBottom: 25 }} />
          </a>
          <a
            href="https://stackoverflow.com/users/10261635/damini-ganesh"
            target="_blank"
            style={{ color: "aliceblue", margin: 20 }}
          >
            <FaStackOverflow style={{ marginBottom: 25 }} />
          </a>
          <a
            href="mailto:damini.ganesh@gmail.com"
            target="_blank"
            style={{ color: "aliceblue", margin: 20 }}
          >
            <MdEmail style={{ marginBottom: 25 }} />
          </a>
        </MDBContainer>
      </div>

      <div
        className="footer-copyright text-center py-3"
        style={{
          background: "-webkit-linear-gradient(#FFC75F, #FF9671, #FF5391)",
          webkitBackgroundClip: "text",
          webkitTextFillColor: "transparent",
          fontSize: 10,
        }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Damini Ganesh
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
