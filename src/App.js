import { useState } from "react";
import "./App.css";
import { wordList } from "./constants/data";

function App() {
  const [boardData, setBoardData] = useState(
    JSON.parse(localStorage.getItem("board-data"))
  );
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [charArray, setCharArray] = useState([]);

  const resetBoard = () => {
    const alphabetIndex = Math.floor(Math.random() * 26);
    const wordIndex = Math.floor(
      Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length
    );
    let newBoardData = {
      ...boardData,
      solution: wordList[String.fromCharCode(97 + alphabetIndex)][wordIndex],
      rowIndex: 0,
      boardWords: [],
      boardRowStatus: [],
      presentCharArray: [],
      absentCharArray: [],
      correctCharArray: [],
      status: "IN_PROGRESS",
    };
    setBoardData(newBoardData);
    localStorage.setItem("board-data", JSON.stringify(newBoardData));
  };

  return <div className="App"></div>;
}

export default App;
