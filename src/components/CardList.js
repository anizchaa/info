import React from "react";
import "../style.css";
import Card from "./Card";

const CardList = ({ datas }) => {
  return (
    <div>
      <h1>List of Names</h1>
      <input type="search" placeholder="Search"></input>
      <div className="lists">
        {datas.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};
export default CardList;
