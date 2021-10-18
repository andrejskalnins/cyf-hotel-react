import React from "react";
import "./TouristInfoCard.css";

const TouristInfoCard = props => {
  return (
    <div className="card m-3  text-center w-25 " key={props.index}>
      <img src={props.img} className="card-img-top" alt={props.name} />
      <div className=" card-body  ">
        <h3 className="card-title ">{props.name}</h3>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-primary ">
          More Information
        </a>
      </div>
    </div>
  );
};
export default TouristInfoCard;
