import React from "react";

// export class Footer extends Component {
function Footer({ bgcolor = "#FFF" }) {
  console.log("bgcolor", bgcolor);

  return (
    //   <> <!-- Footer -->
    <footer
      className="sticky-footer p-4"
      style={{
        backgroundColor: bgcolor ? bgcolor : "#fff",
      }}
    >
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2021</span>
        </div>
      </div>
    </footer>
    // <!-- End of Footer --></>
  );
}
export default Footer;
