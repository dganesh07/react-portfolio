import React from "react";
import styled from "styled-components";
import open_image from "../dams_herself.svg";
import name from "../dams_name.svg";
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

      {!isTabletOrMobile && <Navbar sticky={isSticky} />}
      <br />
      <div style={{ marginLeft: 35, fontSize: 20, padding: 40 }}>
        <span
          style={{
            textDecoration: "none",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 20,
          }}
        >
          Welcome to my portfolio!
        </span>
        <br />
        <span
          style={{
            textDecoration: "none",
            fontFamily: "Times New Roman, Times, serif",
            fontSize: 20,
          }}
        >
          I design, develop and test using a wide variety of technologies. pol·y·glot.
        </span>
      </div>
      <div className="row" style={{ color: "black" }}>

        <Name className="col-md-6">
          <div
            style={{
              marginTop: isTabletOrMobile ? 0 : 250,
              width: isTabletOrMobile ? 400 : 750,
              marginLeft: isTabletOrMobile ? 40 : 120,
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
            <img src={open_image} style={{ width: 500, height: 550, zIndex: -1 }} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Hero;
