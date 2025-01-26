import React, { Component } from "react";
import Table from "./Table";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export class Main extends Component {
  render() {
    return (
      <>
        {/* Page Wrapper */}
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div className="container-fluid">
                <h1 class="h3 mb-4 text-gray-800">Table Page</h1>
                <Table />
              </div>
            </div>

            <Footer />
          </div>
        </div>
        {/* end page wrapper */}
      </>
    );
  }
}
