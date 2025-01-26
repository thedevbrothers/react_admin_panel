import React, { Component } from "react";
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Main from "./pages/Main";

export default class Deshboard extends Component {
  render() {
    return (
      <>
        {/* Page Wrapper */}
        <div id="wrapper">
          <Sidebar></Sidebar>
          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              <Navbar></Navbar>
              {/* <Main></Main> */}
              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>
              </div>

              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}
            <Footer></Footer>
          </div>

          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* end page wrapper */}
      </>
    );
  }
}
