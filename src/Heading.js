import React from "react";
import "./Heading.css";
const Heading = props => {
  let logo = "https://image.flaticon.com/icons/svg/139/139899.svg";
  return (
    <header className="Heading">
      <img src={logo} className="Heading-logo" />
      <p className="Heading-logo-text">CYF Hotel</p>
    </header>
  );
};
export default Heading;
