import React from "react";

const AnimeCard = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.image} alt="" />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        {/* <a href="" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </div>
  );
};

export default AnimeCard;
