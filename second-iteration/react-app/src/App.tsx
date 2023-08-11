import { useState } from "react";
import Button from "./components/Button";
import Alert1 from "./components/Alert1";

// let items = ["New Delhi", "New york", "Tokyo", "Bangluru", "London", "Paris"];
// const handleSelectedItem = (thing: string) => {
//   console.log(thing);
// };

function App() {
  const [isAlert, setIsAlert] = useState(false);
  return (
    <div>
      <Alert1 showAlert={isAlert} handleCross={() => setIsAlert(false)} />
      <Button
        color="primary"
        handleClick={() => setIsAlert(true)}
        children="Click Me"
      />
    </div>
  );
}

export default App;
