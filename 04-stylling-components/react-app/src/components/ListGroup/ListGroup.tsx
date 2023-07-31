import React, { useState } from "react";
import "./ListGroup.css";

const ListGroup = () => {
  let items = [
    "New Delhi",
    "Tokyo",
    "Mascow",
    "Chennai",
    "London",
    "New york",
    "Paris",
  ];

  const [isSelected, setIsSelected] = useState(-1);

  return (
    <div>
      <h1>ListGroup</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              isSelected === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setIsSelected(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
