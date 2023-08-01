import React, { useState } from "react";

const App01 = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom", "Onions"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      {pizza.toppings.map((top) => (
        <p>{top}</p>
      ))}
    </div>
  );
};

export default App01;
