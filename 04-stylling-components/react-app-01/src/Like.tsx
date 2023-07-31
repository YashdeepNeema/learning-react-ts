import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = () => {
  const [isLiked, setIsLiked] = useState(true);
  return (
    <div>
      {isLiked ? (
        <AiOutlineHeart
          color="#ff6b81"
          size={20}
          onClick={() => setIsLiked(!isLiked)}
        />
      ) : (
        <AiFillHeart
          color="#ff6b81"
          size={20}
          onClick={() => setIsLiked(!isLiked)}
        />
      )}
    </div>
  );
};

export default Like;
