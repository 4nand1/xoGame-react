"use client";

import { use, useState } from "react";

export const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

const handeClick = (index) => {
  const newBoard = [...board];
  if (newBoard[index] !== "") return ;
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
};

const checkWinner = () => {
  setWinner(board[0]);
} else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
  setWinner(board[1]);
}

useEffect(() => {
  checkWinner();
}, [board]);

if (winner) {
  return <div>Winner {winner}</div>
}

  return ( 
    <div className="grid grid-cols-3 gap-2 w-48 mb-4">
      <div className="p-6 rounded-md shadow-sm bg-white border">
        <div className="grid grid-cols-3 gap-2 border-black">
          {board.map((item, index) => (
            <div key={index} className="w-20 h-20 flex items-center justify-center border text-2xl  font-bold b\hover:bg-gray-200 cursor-pointer transition-all border-black">

              {item}
            </div>
          ))}
            </div>

      </div>
    </div>
  )