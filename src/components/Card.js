import React from "react";
import "../style.css";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div className="content">
        <img
          src={`https://robohash.org/${data.id}?set=set2&size=180x180`}
          alt="uimg"
        />
        <h3>{data.name}</h3>
        <h4>{data.phone}</h4>
        <h5>{data.email}</h5>
      </div>
    </div>
  );
};
export default Card;
