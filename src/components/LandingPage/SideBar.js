import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { Link, useRouteMatch, useLocation } from "react-router-dom";
import "./sideBar.css";
import Decagon from "../../Images/decagon-logo23.png";
import Navbar from "../navbar/Navbar";
import DashboardRoutes from "../../pages/DashboardRoutes";

const SideBar = ({ match }) => {
  const params = useLocation().pathname.split("/").slice(-1).join("");
  const [state, setState] = useState({
    dashboard: false,
    request: false,
    department: false,
    roles: false,
    settings: false,
  });
  const [inc, setInc] = useState(0);
  useEffect(() => {
    setState({
      dashboard: params === "dashboard",
      request: params === "request",
      department: params === "department",
      roles: params === "roles",
      settings: params === "settings",
    });

    // eslint-disable-next-line
  }, [inc]);
  const handleActive = () => {
    setInc(inc + 1);
  };
  return (
    <>
      <div className='bars'>
        <div className='sideBarDiv'>
          <div className='sideBarDiv__image-container'>
            <img src={Decagon} alt='Decagon' className='sideBarDiv__image' />
          </div>
          <div className='sideBarDiv__field'>
            <Link
              to='/dashboard'
              className={`link ${state.dashboard && "active"}`}
              onClick={() => handleActive()}
            >
              <i class='fas fa-columns'></i>{" "}
              <span className='sidebar_text'>Dashboard</span>
            </Link>
          </div>
          <div className='sideBarDiv__field'>
            <Link
              to='/dashboard'
              className={`link ${state.request && "active"}`}
              onClick={() => handleActive()}
            >
              <i class='fab fa-get-pocket'></i>{" "}
              <span className='sidebar_text'>Request</span>
            </Link>
          </div>
          <div className='sideBarDiv__field '>
            <Link
              to='/dashboard/department'
              className={`link ${state.department && "active"}`}
              onClick={() => handleActive("department")}
            >
              <i class='far fa-building'></i>
              <span className='sidebar_text'>Department</span>
            </Link>
          </div>
          <div className='sideBarDiv__field'>
            <Link
              to='/dashboard/roles'
              className={`link ${state.roles && "active"}`}
              onClick={() => handleActive("roles")}
            >
              <i class='fas fa-balance-scale-right'></i>
              <span className='sidebar_text'>Roles</span>
            </Link>
          </div>
          <div className='sideBarDiv__field'>
            <Link
              to='/dashboard'
              className={`link ${state.settings && "active"}`}
              onClick={() => handleActive()}
            >
              <i class='fas fa-wrench'></i>
              <span className='sidebar_text'>Settings</span>
            </Link>
          </div>
        </div>

        <div className='main_div'>
          <Navbar />
          <DashboardRoutes match={match} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
