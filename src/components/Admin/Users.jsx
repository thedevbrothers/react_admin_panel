import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

// export class Users extends Component {
function Users() {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("/adduser");
  };
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
                  "Gurjeet Singh",
                  "Manpreet kaur",
                  "Amandeep kaur",
                  "Mandeep Singh",
                  "Jagveer Singh",
                ].map((User, index) => (
                  <div className="col-6 col-md-6" key={index}>
                    <div className="card border-0 shadow-sm p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <span>{User}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="d-flex justify-content-start mt-4 p-4">
              <button className="btn btn-primary  me-2" onClick={handleAddUser}>
                Add User
              </button>
              <button className="btn btn-secondary">Select</button>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
