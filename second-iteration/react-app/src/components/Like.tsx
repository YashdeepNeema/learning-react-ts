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
