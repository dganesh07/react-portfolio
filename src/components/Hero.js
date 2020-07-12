import React from "react";
import styled from "styled-components";
import face from "../animation.gif";
import face2 from "../dams_herself.svg";
import name from "../dams_name.svg";

import { Sidenav } from "rsuite";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
function Hero() {
  let coder = "<CODER>";

  const Wrapper = styled.section`
    border: 1px solid white;
    background: white;
  `;
  const Name = styled.section`
    font-size: 30px;
  `;
  return (
    <Wrapper>
      <div className="row" style={{ color: "black", marginLeft: 50 }}>
        <Name className="col-md-6">
          <span>nckdsvskdvjbflskjvbslfkvkdfvbnkn</span>
          <br />
          <span>nckdsvskdvjbflskjvbslfkvkdfvbnknsvfsgs!</span>
          <div style={{ marginTop: 250, marginLeft: 120, width: 750, marginBottom: 100 }}>
            <img src={name} />
          </div>
        </Name>

        <div className="col-md-6">
          <img src={face2} style={{ width: 500, height: 550 }} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
