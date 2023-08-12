import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) console.log("liked");
  };

  return (
    <div>
      <Like onClick={handleClick} isLiked={isLiked} />
    </div>
  );
}

export default App;
