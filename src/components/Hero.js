import React from "react";
import styled from "styled-components";
import face from "../animation.gif";
import face2 from "../dams_herself.svg";
import name from "../dams_name.svg";

import { FaLinkedinIn } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { useMediaQuery } from "react-responsive";
import Navbar from "./Navbar";

function Hero({ isSticky }) {
  const Wrapper = styled.section`
    border: 1px solid white;
  `;
  const Name = styled.section`
    font-size: 30px;
  `;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Wrapper>
      <Navbar sticky={isSticky} />
      <br />
      <div style={{ marginLeft: 35, fontSize: 20, padding: 40 }}>
        <span>nckdsvskdvjbflskjvbslfkvkdfvbnkn</span>
        <br />
        <span>nckdsvskdvjbflskjvbslfkvkdfvbnknsvfsgs!</span>
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
            zIndex: 100,
          }}
        >
          <a href="https://www.linkedin.com/in/daminiganesh/" target="_blank">
            <FaLinkedinIn style={{ marginBottom: 25 }} />
          </a>
          <a href="https://github.com/dganesh07" target="_blank">
            <AiFillGithub style={{ marginBottom: 25 }} />
          </a>
          <a
            href="https://stackoverflow.com/users/10261635/damini-ganesh"
            target="_blank"
          >
            <FaStackOverflow style={{ marginBottom: 25 }} />
          </a>
          <a href="mailto:damini.ganesh@gmail.com" target="_blank">
            <MdEmail style={{ marginBottom: 25 }} />
          </a>
        </div>

        <Name className="col-md-6">
          <div
            style={{
              marginTop: 250,
              marginLeft: 120,
              width: 750,
              marginBottom: 100,
              zIndex: -1,
            }}
          >
            <img
              src={name}
              style={{ width: "100%", maxWidth: 750, height: "auto" }}
            />
          </div>
        </Name>

        {!isTabletOrMobile && (
          <div className="col-md-5" style={{ zIndex: -1 }}>
            <img src={face2} style={{ width: 500, height: 550, zIndex: -1 }} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Hero;
