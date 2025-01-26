import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

// export class Products extends Component {
function Products() {
  return (
    <>
      {/* Top Navbar */}
      <div>
        <Navbar />
        <div className="d-flex" style={{ height: "90vh" }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column">
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
            </div>
            {/* Action Buttons */}
            <div className="d-flex justify-content-start mt-4 p-4">
              <button className="btn btn-danger me-2">Add</button>
              <button className="btn btn-secondary">Select</button>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Products;
