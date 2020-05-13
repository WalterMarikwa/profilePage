import React from "react";
// import { Link } from "react-router-dom";
import "../styles/styles.css";

function Footer() {
  return (
    // <div className="myFooter">
    //   <p>Last Updated May 2020.</p>
    //   <p>© 2020 Copyright: Samson Marikwa. All Rights Reserved</p>
    //   <div className="footer-copyright text-center py-3">
    //     <i class="fab fa-facebook-f"></i>
    //     <i class="fab fa-twitter"></i>
    //     <i class="fab fa-linkedin-in"></i>
    //     <i class="fab fa-github"></i>
    //   </div>
    // </div>
    <div className="outer-footer">
      <div className="inner-footer">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-github"></i>
        <p>Last Updated May 2020.</p>
      </div>
    </div>
  );
}

export default Footer;
