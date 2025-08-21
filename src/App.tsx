import React, { useState } from "react";
import InputField from "./components/InputField";

function App() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Testing InputField Component</h1>
      <InputField
        label="Your Name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter name"
        helperText="This is a helper text"
        errorMessage={text === "" ? "Field cannot be empty" : ""}
        invalid={text === ""}
        variant="outlined"
        size="md"
      />
      <p>Typed Value: {text}</p>
    </div>
  );
}

export default App;
