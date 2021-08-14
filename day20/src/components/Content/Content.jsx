import React, { useState } from "react";
import Card from "../Card/Card";
import "./Content.css";
import Food from "./Food.jsx";

const Content = () => {
  const [state, setState] = useState(Food);

  const foodList = (food, id) => {
    return (
      <>
        <Card
          state={state}
          setState={setState}
          id={food.id}
          name={food.name}
          value={food.amount}
          key={id}
        />
      </>
    );
  };

  return (
    <div className="content">
      <div className="content-box">
        {state.length > 0 ? state.map(foodList) : "No Objects Left"}
      </div>
    </div>
  );
};

export default Content;
