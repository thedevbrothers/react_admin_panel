import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>
        {/* <!-- Topbar --> */}
        {/* <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"> */}
        <div className="d-flex justify-content-between align-items-center bg-primary text-white px-4 py-2">
          <div className="text-center w-100">
            <img
              src="https://dummyimage.com/40x40/fff/000&text=Icon"
              alt="Icon"
              className="me-2"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
          <div className="d-flex align-items-center">
            <span className="me-2">Welcome, Preet</span>
            <div
              className="bg-white text-primary rounded-circle"
              style={{ width: "30px", height: "30px" }}
            ></div>
          </div>
        </div>
        <div
          className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a className="dropdown-item" href="#">
            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a className="dropdown-item" href="#">
            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item"
            href="#"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>

        {/* <!-- End of Topbar --> */}
      </>
    );
  }
}

export default Navbar;
