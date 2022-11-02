import React from "react";
import Zuri from "../assets/Zuri.jpg";
import Ingressive from "../assets/I4G.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Zuri} />
      <p>HNG Internship 9 Frontend task</p>
      <img src={Ingressive} />
    </div>
  );
};

export default Footer;
