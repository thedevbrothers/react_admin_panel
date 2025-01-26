import React, { Component } from "react";

export class Dash extends Component {
  render() {
    return (
      <>
        <div className="d-flex vh-100">
          {/* Sidebar */}
          <div className="bg-success text-white p-3" style={{ width: "250px" }}>
            <div className="text-center mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="mb-2"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a className="nav-link text-white active" href="#">
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

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center bg-primary text-white px-4 py-2">
              <div className="d-flex align-items-center">
                <img
                  src="/icon.png"
                  alt="Icon"
                  className="me-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <h5 className="m-0">Product Categories</h5>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-2">Welcome, Preet</span>
                <div
                  className="bg-white text-primary rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                ></div>
              </div>
            </div>

            {/* Product Categories Grid */}
            <div className="flex-grow-1 p-4">
              <div className="row g-3">
                {[
                  "Car",
                  "Travel",
                  "Electronics",
                  "Phone",
                  "Motorbike",
                  "Household",
                  "Furniture",
                  "Jewellery",
                  "Media",
                  "Storage",
                  "Home",
                  "Tools",
                  "Machinery",
                  "Bicycle",
                  "Other",
                ].map((category, index) => (
                  <div className="col-6 col-md-4" key={index}>
                    <div className="card border-0 shadow-sm p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{category}</span>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={`switch-${index}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex justify-content-end mt-4">
                <button className="btn btn-danger me-2">Delete</button>
                <button className="btn btn-secondary">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dash;
