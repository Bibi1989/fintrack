import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className={props.container}>
        <div>
            HI
          <div className={"ellipsis"}></div>
          <div className={"ellipsis"}></div>
          <div className={"ellipsis"}></div>
        </div>
      </div>
    </>
  );
};

export default Card;
