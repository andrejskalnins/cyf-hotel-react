import React from "react";

function Footer(props) {
  return (
    <ul className="list-group text-center">
      {props.contact.map(item => (
        <li className="list-group-item border-0">{item}</li>
      ))}
    </ul>
  );
}
export default Footer;
