import React from "react";
import Card from "./card";

const Grid = (props) => {
  return (
    <div className="grid grid-cols-3">
      {props.items.map((item) => (
        <div key={item.id}>
          <Card quote={item.quote} author={item.author} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
