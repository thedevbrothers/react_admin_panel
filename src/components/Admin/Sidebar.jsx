import React from "react";
import { Link, useLocation } from "react-router-dom";

// export class Sidebar extends Component {
function Sidebar() {
  const location = useLocation(); // Get the current route

  // console.log(location);

  return (
    <>
      <div
        className="text-white p-3"
        style={{
          width: "250px",
          minWidth: "250px",
          backgroundColor: "#8bc241",
        }}
      >
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="/product-category"
              className="nav-link text-white fw-bold  rounded"
              style={{
                backgroundColor:
                  location.pathname === "/product-category"
                    ? "#0589a9"
                    : "transparent",
              }}
            >
              Product Categories
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/claims"
              className="nav-link text-white fw-bold  rounded"
              style={{
                backgroundColor:
                  location.pathname === "/claims" ? "#0589a9" : "transparent",
              }}
            >
              Claims
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/products"
              className="nav-link text-white fw-bold  rounded"
              style={{
                backgroundColor:
                  location.pathname === "/products" ? "#0589a9" : "transparent",
              }}
            >
              Products
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link
              to="/users"
              className="nav-link text-white fw-bold rounded"
              style={{
                backgroundColor:
                  location.pathname === "/users" ? "#0589a9" : "transparent",
              }}
            >
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/settings"
              className="nav-link text-white fw-bold rounded"
              style={{
                backgroundColor:
                  location.pathname === "/settings" ? "#0589a9" : "transparent",
              }}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
