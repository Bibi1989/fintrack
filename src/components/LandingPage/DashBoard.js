import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import "./card-style.css";
import img1 from "../../Images/claims.jpg";
import img2 from "../../Images/access-denied2.jpg";
import img3 from "../../Images/approved.jpg";

function Dashboard() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div>
          <div className="row">
            <div className="col-md-4">
              <Card1 imgsrc={img1} num="15000" status="Claims" />
            </div>
            <div className="col-md-4">
              <Card1 imgsrc={img2} num="20000" status="Denied" />
            </div>
            <div className="col-md-4">
              <Card1 imgsrc={img3} num="15000" status="Approved" />
            </div>
          </div>
          <div className="">
            <Card3 status="Request Status" value="Approved" />
          </div>
        </div>

        <div className="">
          <Card2 num="1500" category="Request" title="SHORT SUMMARY" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
