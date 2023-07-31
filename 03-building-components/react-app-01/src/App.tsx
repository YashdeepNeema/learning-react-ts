import React, { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisibile, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibile && (
        <Alert onClose={() => setAlertVisibility(false)}>
          {<span>Kuch alert</span>}
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Button
      </Button>
    </div>
  );
};

export default App;
