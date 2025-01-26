import React from "react";
// import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function AddUsers() {
  const navigate = useNavigate();

  const handleRedirectToUsers = () => {
    navigate("/users");
  };
  return (
    <>
      {/* Top Navbar */}
      <div>
        <Navbar />
        <div
          className="d-flex"
          style={{ height: "90vh", backgroundColor: "#8bc241" }}
        >
          {/* Sidebar */}
          {/* <Sidebar /> */}

          {/* Main Content */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* Product Categories Grid */}
            <div className="flex-grow-1 p-4">
              <div className="row g-3" style={{ height: "70vh" }}>
                {/* Action Buttons */}
                <div className="d-flex justify-content-start align-items-center">
                  <div className="p-4 rounded " style={{ width: "80vw" }}>
                    <form>
                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="Fullname"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Full Name
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="fullname"
                            className="form-control"
                            placeholder="Gurjeet Singh"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="username"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Username
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="username"
                            className="form-control"
                            placeholder="gurjeetndtv"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="email"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Email Address
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                            placeholder="gurjeet@mailinator.com"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="phone"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Phone Number
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="phoneno"
                            className="form-control"
                            placeholder="9876543210"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row mb-3 align-items-center">
                        <label
                          htmlFor="password"
                          className="col-sm-4 col-form-label text-end text-white"
                        >
                          Password
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            placeholder="**************"
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center">
                        <label
                          htmlFor="birthday"
                          className="col-sm-4 col-form-label text-end  text-white"
                        >
                          Birthday
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="birthday"
                            className="form-control"
                            placeholder="19/04/1998"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="company"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Company
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="company"
                            className="form-control"
                            placeholder="Superhub"
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="row mb-3 align-items-center  text-white">
                        <label
                          htmlFor="title"
                          className="col-sm-4 col-form-label text-end"
                        >
                          Title
                        </label>
                        <div className="col-sm-8">
                          <input
                            type="text"
                            id="title"
                            className="form-control"
                            placeholder="Software Developer"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="row mb-3 align-items-center">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-3">
                          <div className="d-flex justify-content-between">
                            <button
                              type="submit"
                              className="btn btn-success"
                              onClick={handleRedirectToUsers}
                            >
                              Save
                            </button>
                            <button type="button" className="btn btn-secondary">
                              Cancel
                            </button>
                            <button type="button" className="btn btn-danger">
                              Log Out
                            </button>
                          </div>
                          <div className="col-sm-5"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <Footer bgcolor="#8bc241" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddUsers;
