import { useState } from "react";
import MainComponent from "./componennts/mainComponent";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainComponent />
    </>
  );
}

export default App;
