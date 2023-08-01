import { useState } from "react";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: drink.price + 1,
    };
    setDrink({ ...drink, price: drink.price + 1 });
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
