import React from "react";
import instagram from "./assets/images/instagram.png" 
import facebook from "./assets/images/facebook.png" 

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <small>&copy; 2022 All rights reserved.</small>
      </div>
      <div className="footer-center">
        <span role="img">Built with ❤️ from California</span>
      </div>
      <div className="footer-right">
        <img src={instagram} alt="instagram-icon" />
        <img src={facebook} alt="facebook-icon" />
      </div>
    </footer>
  );
}

export default Footer;
