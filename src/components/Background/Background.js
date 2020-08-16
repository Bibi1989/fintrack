import React from "react";
// import styled from "styled-components";
import Style from "./Background.module.css";
import "./style.css";

function Background() {
  return (
    <div className={Style.img}>
      <div className='side-background'>
        <img
          src='./assets/background.png'
          alt='Decagon'
          className={Style.decagon}
          style={{ width: "100%", minHeight: "101vh" }}
        />
        <div className='background-text'>
          <img src='./assets/decagon-logo23.png' alt='Decagon logo' />
          <p>
            Decagon is a software engineering institute ushering in a new phase
            of tech-powered growth and prosperity in Nigeria by training and
            deploying an army of leader-developers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Background;
