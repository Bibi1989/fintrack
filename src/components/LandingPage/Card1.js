import React from "react";

const Cards = (props) => {
  return (
    <div className="card card1  text-center shadow-sm">
      <div className="overflow">
        <img src={props.imgsrc} alt="claims" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h5 className="card-title">{props.num}</h5>
        <p className="card-text text-secondary">{props.status}</p>
      </div>
    </div>
  );
};

export default Cards;
