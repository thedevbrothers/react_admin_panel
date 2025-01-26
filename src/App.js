import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
// import "./css/sb-admin-2.css";

import ProductCate from "./components/Admin/ProductCate";
import Claims from "./components/Admin/Claims";
import Products from "./components/Admin/Products";
import Users from "./components/Admin/Users";
import Settings from "./components/Admin/Settings";
import Login from "./components/login/Login";
import AddUsers from "./components/Admin/AddUsers";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ProductCate />} /> */}
        <Route path="/product-category" element={<ProductCate />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Login />} />
        <Route path="/adduser" element={<AddUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
