import React from "react";
import "./App.css";

import { Button } from "semantic-ui-react";

const ButtonExampleLabeledBasicShorthand = () => (
  <div>
    <Button
      color="red"
      content="Like"
      icon="heart"
      label={{ basic: true, color: "red", pointing: "left", content: "2,048" }}
    />
    <Button
      basic
      color="blue"
      content="Fork"
      icon="fork"
      label={{
        as: "a",
        basic: true,
        color: "blue",
        pointing: "left",
        content: "2,048"
      }}
    />
  </div>
);
function App() {
  return (
    <div className="App">
      lets catch-up
      <ButtonExampleLabeledBasicShorthand />
    </div>
  );
}

export default App;
