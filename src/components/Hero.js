import React from "react";
import styled from "styled-components";
import img from "../skyline.jpg";
import img2 from "../skyline2.jpg";
import idea from "../boo.jpg";

function Hero() {
  let coder = "<CODER>";

  const Wrapper = styled.section`
    border: 1px solid white;
    height: 600px;
    background: white;
  `;
  const Name = styled.section`
    font-size: 80px
  `
  return (
    <Wrapper>
      <div className="row" style={{ color: "black", marginLeft: 50 }}>
        <Name className="col-md-6">
          <span>𝕯𝖆𝖒𝖎𝖓𝖎</span>
          <br/>
          <span>𝕲𝖆𝖓𝖊𝖘𝖍</span>
        </Name>

        <div className="col-md-6">
          <img src={idea} />
        </div>
      </div>
    </Wrapper>
  );
}

export default Hero;
