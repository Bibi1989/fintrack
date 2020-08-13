import React from "react";

const Card2 = (props) => {
  return (
    <div className="card card2 text-center shadow-sm">
      <div className="overflow">
        <h3>{props.title}</h3>
        <div>
          <div>
            <h5>{props.num}</h5>
            <span>{props.category}</span>
            <span>. . .</span>
          </div>
        </div>
      </div>
      <div className="card-body text-dark">
        <ul>
          <li>
            <h5>Education</h5>
            <div>
              <span>45</span>
              <span>45%</span>
            </div>
          </li>
          <li>
            <h5>Marketing</h5>
            <div>
              <span>7</span>
              <span>20%</span>
            </div>
          </li>
          <li>
            <h5>Office Isues</h5>
            <div>
              <span>20</span>
              <span>35%</span>
            </div>
          </li>
          <li>
            <h5>Entertainments</h5>
            <div>
              <span>15</span>
              <span>12%</span>
            </div>
          </li>
          <li>
            <h5>Others</h5>
            <div>
              <span>50</span>
              <span>50%</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card2;
