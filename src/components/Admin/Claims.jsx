import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Claims() {
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
              <div className="row g-3" style={{ height: "70vh" }}>
                {/* Action Buttons */}
                <div className="d-flex justify-content-center align-items-center mt-4 p-4 flex-column">
                  <button
                    className="btn btn-danger mb-2 btn-lg pl-5 pr-5 fw-bold"
                    style={{ width: "400px", backgroundColor: "#0589a9" }}
                  >
                    Pending
                  </button>
                  <button
                    className="btn btn-secondary btn-lg pl-5 pr-5 fw-bold"
                    style={{ width: "400px", backgroundColor: "#0589a9" }}
                  >
                    Completed
                  </button>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
export default Claims;
