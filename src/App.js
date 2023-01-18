import { useState } from "react";
import "./App.css";

function App() {
  const [boardData, setBoardData] = useState(
    JSON.parse(localStorage.getItem("board-data"))
  );
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [charArray, setCharArray] = useState([]);

  return <div className="App"></div>;
}

export default App;
