import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      style={{ backgroundColor: "#1B1464" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1
              style={{
                background:
                  "-webkit-linear-gradient(#FFC75F, #FF9671, #FF5391)",
                webkitBackgroundClip: "text",
                webkitTextFillColor: "transparent",
              }}
            >
              If you’d like to get in touch — email me
            </h1>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
