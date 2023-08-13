interface Props {
  children: string;
  isExpanded: Boolean;
  onClick: () => void;
}

const ExpandableText = ({ children, isExpanded, onClick }: Props) => {
  return (
    <>
      <div>
        {children}
        <button onClick={onClick}>{isExpanded ? "Less" : "More"}</button>
      </div>
    </>
  );
};

export default ExpandableText;

/**
 *
 * App code 

import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [expanded, setExpanded] = useState(false);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quia obcaecati in asperiores perferendis doloremque debitis voluptas fugit, expedita sapiente vero, corrupti earum, unde illo ipsa. In quo expedita ex? Consequuntur aperiam a ducimus vitae repellat eos totam, hic aliquid ipsa unde mollitia aliquam sequi nemo laboriosam voluptatibus quos. Quasi quia nostrum itaque tenetur aut! Quis eaque dicta aliquid quibusdam qui obcaecati consequuntur tempora, ad corporis quisquam adipisci est hic minus optio quas ducimus ea officia asperiores amet maiores tenetur nesciunt. Eos, fugit? Minima aspernatur vel similique dignissimos consequuntur temporibus quisquam, doloremque ducimus veniam hic quos ullam dolore atque pariatur sed optio fuga adipisci iure earum. Quis quam id doloribus sit maxime dolore voluptatem optio nihil fuga? Maxime, tempore sunt ex debitis dolorum culpa eius expedita vitae labore modi, quidem, omnis nulla corrupti beatae delectus? Fugit quos excepturi labore non quod expedita eos, facilis aliquam aspernatur eaque exercitationem quas saepe, fuga dignissimos at nisi dolorem mollitia doloremque earum, ducimus accusamus voluptatibus optio asperiores. Consequuntur repudiandae vel rerum autem architecto assumenda itaque, eaque nam quod dignissimos iste eveniet nesciunt provident obcaecati voluptas, et odit cum magnam voluptate quaerat nemo alias tenetur quibusdam? Id architecto a at placeat inventore est quasi veniam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aliquam veritatis sed nobis modi nisi amet? Minima hic laborum ullam nisi dicta vitae magnam a alias, placeat esse, nemo deleniti.";

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <ExpandableText onClick={handleClick} isExpanded={expanded}>
        {expanded ? text : text.substring(0, 50) + "..."}
      </ExpandableText>
    </>
  );
}

export default App;

 */
