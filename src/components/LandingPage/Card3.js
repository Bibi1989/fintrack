import React from "react";
import Card4 from "./Card4";

const Card3 = (props) => {
  return (
    <div className="card card3 text-center shadow-sm">
      <div className="overflow">
        <h4>{props.status}</h4>
        <Card4 status={props.value} />
      </div>
      <div className="card-body text-dark">
        <div>
          <h2>Chart</h2>
        </div>
      </div>
    </div>
  );
};

export default Card3;
