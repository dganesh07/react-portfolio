import React from "react";
import styled from "styled-components";
import face from "../animation.gif";
import face2 from "../dams_herself.svg";
import name from "../dams_name.svg";

function Hero() {
  let coder = "<CODER>";

  const Wrapper = styled.section`
    border: 1px solid white;
    height: 500px;
    background: white;
  `;
  const Name = styled.section`
    font-size: 80px;
  `;
  return (
    <Wrapper>
      <div className="row" style={{ color: "black", marginLeft: 50 }}>
        <Name className="col-md-6">
          <img src={name} />
        </Name>

        <div className="col-md-6">
          <img src={face2} style={{width: 500, height: 500}}/>
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
