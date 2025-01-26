import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.css";

import Deshboard from "./components/Deshboard";
import { Main } from "./components/pages/Main";

function App() {
  return (
    <Router>
      {/* <div className="d-flex">
        <Sidebar />
        <div className="content">
          <Navbar /> */}
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/table" element={<Main />} />
      </Routes>
      {/* <Footer />
        </div>
      </div> */}
    </Router>
  );
}

export default App;
