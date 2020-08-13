import React from "react";
import { Link, useRouteMatch, NavLink } from "react-router-dom";
import tempAvatar from "../../Images/avatar[137].png";
// import Badge from "@material-ui/core/Badge";
// import MailIcon from "@material-ui/icons/Notifications";
import Notification from "../notification";
import Search from "@material-ui/icons/Search";
// import SearchBar from "material-ui-Search-bar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Navbar = (props) => {
  // const history = useHistory();
  const isSignin = useRouteMatch("/signin");
  const isSignup = useRouteMatch("/signup");
  const isForgotPassword = useRouteMatch("/forgot-password");

  const match =
    isSignin?.isExact || isSignup?.isExact || isForgotPassword?.isExact;

  return (
    <>
      <div
        className={`container-fluid d-none d-md-block bg-white`}
        style={{ backgroundColor: "white", height: "60px" }}
      >
        <div
          className="  navbar navbar-expand-lg navbar-light bg-white"
          style={{ maxHeight: "50px" }}
        >
          <Link
            className="navbar-brand font-weight-bold text-black mr-5 ml-5"
            to="/"
          >
            Employee View
          </Link>
          <Link
            className="navbar-brand font-weight-bold text-black mr-5"
            to="/"
          >
            System Control
          </Link>
          <Link
            className="navbar-brand font-weight-bold text-black mr-auto"
            to="/"
          >
            Admin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDesktopMenu"
            aria-controls="navbarDesktopMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" collapse navbar-collapse w-100 "
            id="navbarDesktopMenu"
          >
            <ul className="navbar-nav d-flex justify-content-center w-100 ">
              <li className="nav-item p-0 pl-2 w-10 my-auto ml-auto mr-1">
                <div className="cursor-pointer nav-link rounded-circle border border-dark">
                  <div
                    className="position-relative max-w-rem-2a "
                    style={{ maxWidth: "2.2rem" }}
                  >
                    <Search style={{ fontSize: 23 }} />
                  </div>
                </div>
              </li>
              {/*  
               <li>
                <SearchBar
                  value={this.state.value}
                  onChange={(newValue) => this.setState({ value: newValue })}
                  // onRequestSearch={() => doSomethingWith(this.state.value)}
              />
              </li>
              */}
              <li className="nav-item p-0 pl-2 w-10 my-auto dropdown mr-3">
                <Notification />
              </li>
              <li className="nav-item dropdown mx-2 text-center mr-5">
                <div
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={tempAvatar}
                    alt="..."
                    style={{
                      height: "4.2rem",
                      width: "4.2rem",
                    }}
                    className="img-fluid rounded-circle p-1"
                  ></img>
                  <ArrowDropDownIcon style={{ fontSize: 30 }} />
                </div>
                {/*  Users Profile/logout */}
                <div
                  className="dropdown-menu dropdown-menu-right min-w-rem-disrupt mr-2"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="dropdown-item">Profile</div>
                  <div className="dropdown-item cursor-pointer">Sign out</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`container-fluid d-md-none ${
          match ? "bg-light-grey" : "bg-white"
        }`}
      >
        <div className="container navbar fixed-top navbar-expand-lg navbar-light bg-white pt-4 mh-100 overflow-auto">
          <Link
            className="navbar-brand font-weight-bold text-black d-flex align-items-center position-relative mb-3"
            to="/"
          >
            <div className="bg-logo logo-small mr-3 position-absolute"></div>
            <span className="d-none d-lg-block d-xl-block pl-5">
              Startup Zone
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMobileMenu"
            aria-controls="navbarMobileMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-4" id="navbarMobileMenu">
            <ul className="navbar-nav ">
              <div className="w-90 d-flex align-items-center mt-3 mb-4">
                <img
                  src={tempAvatar}
                  alt="..."
                  className="img-fluid rounded-circle p-1"
                  style={{
                    minHeight: "3.2rem",
                    minWidth: "3.2rem",
                    maxHeight: "3.2rem",
                    maxWidth: "3.2rem",
                  }}
                ></img>
                <div className="pl-3 d-flex flex-column">
                  <p className="m- text-primary font-weight-bold m-0">
                    {`Abiola`}
                  </p>
                  <p className="m-0">{`abiola@gmail.com`}</p>
                  <div data-toggle="collapse" data-target="#navbarMobileMenu">
                    <Link
                      to="/user/dashboard"
                      className="text-primary font-weight-bold"
                    >
                      My Dashboard
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <>
                  <div className="dropdown-divider w-100 border-primary my-3"></div>
                  <div className="d-flex justify-content-between flex-wrap">
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="/" className="nav-link text-primary">
                        DashBoard
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="#" className="nav-link text-primary">
                        Request
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="/" className="nav-link text-primary">
                        Department
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="/" className="nav-link text-primary">
                        Role
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="/" className="nav-link text-primary">
                        Settings
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink to="/" className="nav-link text-primary">
                        Notifications
                      </NavLink>
                    </li>
                  </div>
                  <div className="dropdown-divider w-100 border-primary my-3"></div>
                  <div className="d-flex justify-content-between flex-wrap">
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <a
                        className="nav-link text-primary font-weight-bold"
                        href="/"
                      >
                        Fintrack
                      </a>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink
                        to="/"
                        className="nav-link text-primary font-weight-bold"
                      >
                        Employee View
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink
                        to="/"
                        className="nav-link text-primary font-weight-bold"
                      >
                        System Control
                      </NavLink>
                    </li>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <NavLink
                        to="/"
                        className="nav-link text-primary font-weight-bold"
                      >
                        Admin
                      </NavLink>
                    </li>
                  </div>
                  <div>
                    <div className="dropdown-divider w-100 border-primary my-3"></div>
                    <li
                      className="nav-item p-0 d-lg-none d-xl-none w-50"
                      data-toggle="collapse"
                      data-target="#navbarMobileMenu"
                    >
                      <button className="button-as-link nav-link text-primary">
                        Sign out
                      </button>
                    </li>
                  </div>
                </>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
