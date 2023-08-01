import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Kalu" } });
  };

  return (
    <div>
      <h1>{game.player.name}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
