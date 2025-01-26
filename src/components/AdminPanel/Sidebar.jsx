import React, { Component } from "react";

export class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="bg-success text-white p-3" style={{ width: "250px" }}>
          <div className="text-center mb-4">
            <img
              src="https://dummyimage.com/50x50/000/fff&text=Logo"
              alt="Logo"
              className="mb-2"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                className="nav-link text-white active bg-dark rounded"
                href="#"
              >
                Product Categories
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Claims
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="nav-link text-white" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Sidebar;
