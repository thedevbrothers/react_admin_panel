import React, { Component } from "react";

export class Dash extends Component {
  render() {
    return (
      <>
        <div className="d-flex">
          {/* Sidebar */}
          <div className="bg-success text-white p-3" style={{ width: "250px" }}>
            <h5 className="mb-4">Admin Panel</h5>
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
          <div className="flex-grow-1">
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center bg-primary text-white px-4 py-2">
              <h5 className="m-0">Product Categories</h5>
              <div className="d-flex align-items-center">
                <span className="me-2">Welcome, Preet</span>
                <div
                  className="bg-white text-primary rounded-circle"
                  style={{ width: "30px", height: "30px" }}
                ></div>
              </div>
            </div>

            {/* Product Categories Table */}
            <div className="p-4">
              <div className="row">
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
                  <div className="col-6 col-md-4 mb-3" key={index}>
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
