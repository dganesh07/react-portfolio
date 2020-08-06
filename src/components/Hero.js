import React from "react";
import styled from "styled-components";
import face from "../animation.gif";
import face2 from "../dams_herself.svg";
import name from "../dams_name.svg";

import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

function Hero() {
  let coder = "<CODER>";

  const Wrapper = styled.section`
    border: 1px solid white;
  `;
  const Name = styled.section`
    font-size: 30px;
  `;
  const Color = styled.section`
    background-color: grey
  `;
  return (
    <Wrapper>
      <div className="row">
        <div style={{ marginLeft: 35, fontSize: 20 }}>
          <span>nckdsvskdvjbflskjvbslfkvkdfvbnkn</span>
          <br />
          <span>nckdsvskdvjbflskjvbslfkvkdfvbnknsvfsgs!</span>
        </div>
      </div>
      <div className="row" style={{ color: "black" }}>
        <div
          className="col-md-1"
          style={{
            maxWidth: "50px",
            textAlign: "end",
            position: "absolute",
            bottom: 10,
            fontSize: 20,
            marginLeft: 5,
          }}
        >
          <FaLinkedinIn style={{ marginBottom: 25 }} />
          <AiFillGithub style={{ marginBottom: 25 }} />
          <FaStackOverflow style={{ marginBottom: 25 }} />
          <MdEmail style={{ marginBottom: 25 }} />
        </div>
        
        <Name className="col-md-6">
          <div
            style={{
              marginTop: 250,
              marginLeft: 120,
              width: 750,
              marginBottom: 100,
            }}
          >
            <img src={name} />
          </div>
        </Name>

        <div className="col-md-5" style={{ zIndex: -1 }}>
          <img src={face2} style={{ width: 500, height: 550, zIndex: -1 }} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
