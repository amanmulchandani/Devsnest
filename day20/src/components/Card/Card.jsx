import React from "react";
import "./Card.css";

const Card = (props) => {
  const handleClick = (e) => {
    let newData = props.state.filter((val) => val.id !== props.id);
    console.log(newData);
    props.setState(newData);
  };
  return (
    <div className="card">
      <div className="name">{props.name}</div>
      <div className="value">Calories: {props.value}</div>
      <button className="delete-btn" onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

export default Card;
