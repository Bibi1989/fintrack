import React from "react";
import { Link } from "react-router-dom";
import message from "../Images/mail.png";

function Notification(props) {
  return (
    <div
      className="cursor-pointer nav-link rounded-circle border border-dark"
      id="navbarDropdown"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      role="button"
    >
      <div
        className="position-relative max-w-rem-2a"
        style={{ maxWidth: "2.2rem" }}
      >
        <img src={message} alt="..." className="img-fluid p-1" width="30"></img>
      </div>
      <div
        className="dropdown-menu dropdown-menu-right bg-light notifications"
        style={{ minWidth: "18rem", maxHeight: "30rem", overflowY: "auto" }}
        aria-labelledby="navbarDropdown"
      >
        <div className="d-flex justify-content-between bg-white p-2 border-bottom mb-2">
          <div>Notifications</div>
          <div className="btn btn-link p-0 m-0">Mark all as read</div>
        </div>
        <div className="mx-2 mb-2 border rounded p-2 text-danger">
          No notifications at the moment
        </div>
        <div className="d-flex justify-content-between bg-white p-2 border-top">
          <div className="btn btn-link p-0 m-0">
            <Link to="/user/messages/inbox">See all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
