import { useState } from "react";
import Navbar from "./components/navbar";
import MainContent from "./components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid md:grid-cols-3">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
