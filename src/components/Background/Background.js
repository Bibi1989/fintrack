import React from "react";
import Style from "./Background.module.css";
import "./style.css";

function Background() {
  return (
    <>
      <div className={Style.img}>
        {/* <img
          src='https://bc3-production-blobs-us-east-2.s3.us-east-2.amazonaws.com/04989ee0-33c9-11ea-bfa4-ecf4bbd72a88?response-content-disposition=inline%3B%20filename%3D%22background%25402x.png%22%3B%20filename%2A%3DUTF-8%27%27background%25402x.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200110%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200110T165716Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d942d3c193bd1d658dbf85d5a29b40753edb403c3fe6d703b9934eca8951a04a'
          alt='Decadevs'
          style={{ width: "100%", height: "100%" }}
        /> */}
        <div className="side-background">
          <img
            src="./assets/background.png"
            alt="Decagon"
            className={Style.decagon}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="background-text">
            <img src="./assets/decagon-logo23.png" alt="Decagon logo" />
            <p>
              Decagon is a software engineering institute ushering in a new
              phase of tech-powered growth and prosperity in Nigeria by training
              and deploying an army of leader-developers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Background;
