import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  isLiked: Boolean;
  onClick: () => void;
}

const Like = ({ isLiked, onClick }: Props) => {
  return (
    <>
      {isLiked ? (
        <AiFillHeart size="35px" color="#ff6b81" onClick={onClick} />
      ) : (
        <AiOutlineHeart size="35px" onClick={onClick} />
      )}
    </>
  );
};

export default Like;

/*

App ka code

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

*/
