import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

// export class Settings extends Component {
function Settings() {
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
            <div className="flex-grow-1 p-4"></div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
