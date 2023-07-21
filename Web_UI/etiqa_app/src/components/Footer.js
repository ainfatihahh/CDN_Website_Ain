import React from "react";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia" >
         <LinkedinIcon/>
      </div>
      <p> &copy; 2023 Assesment Ain-Fatihah-Aiman</p>
    </div>
  );
}
export default Footer;