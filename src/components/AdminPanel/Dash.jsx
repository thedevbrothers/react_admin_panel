import React, { Component } from "react";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";

export class Dash extends Component {
  render() {
    return (
      <>
        <div className="d-flex vh-100">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* Top Navbar */}
            <Navbar />

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
