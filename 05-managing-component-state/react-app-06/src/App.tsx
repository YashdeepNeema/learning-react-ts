import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleBtn = () => {
    setIsExpanded(!isExpanded);
  };

  const child =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, earum laborum? Necessitatibus reprehenderit incidunt, odio quae cum, soluta doloremque officiis doloribus corporis neque veniam. A, facilis autem repellat hic veritatis ipsam rem nam aspernatur cupiditate ab suscipit, consequuntur aperiam nobis numquam labore possimus ipsum itaque id dignissimos tempora, vitae officiis nemo voluptatibus. Eveniet fuga sit obcaecati, corporis, odit nesciunt vel architecto reprehenderit at praesentium ullam quidem provident est eligendi soluta consequuntur itaque rem perspiciatis ab illum, omnis quod libero quia delectus! Ullam possimus fugit tempore soluta aut incidunt! Adipisci, dolorem odio. Odit qui nemo exercitationem ad voluptatibus a reiciendis magni voluptas omnis minima illum illo debitis laboriosam dolorem, esse quos hic reprehenderit blanditiis corrupti voluptatum cupiditate commodi. Aut porro perferendis delectus repellat. Illum, sunt nesciunt! Aut at sunt quaerat eligendi laboriosam consectetur suscipit eius earum architecto impedit. Aut quidem sequi iusto reiciendis veritatis expedita quas, alias architecto cum fugiat, laboriosam laudantium perspiciatis corporis ipsum ipsa quos reprehenderit. Esse ad explicabo obcaecati, earum optio perspiciatis voluptates error rerum, saepe, voluptate vitae. Iste magnam atque praesentium, error enim animi rerum. Repellendus, hic? Consequuntur qui omnis possimus? Aspernatur numquam, dolore architecto inventore, maxime odio quae quasi earum illum voluptates consequatur perspiciatis, eius aperiam?";
  return (
    <div>
      <ExpandableText onBtn={handleBtn} click={isExpanded ? "Less" : "More"}>
        {isExpanded ? child : child.substring(0, 25) + "..."}
      </ExpandableText>
    </div>
  );
}

export default App;
