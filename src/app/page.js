"use client";

import { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);

  const handeClick = (index) => {
    const newBoard = [...board];

    if (newBoard[index] !== "" || winner) return;

    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  const handleReset = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn("X");
    setWinner(null);
  };

  if (winner) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="bg-white rounded-xl shadow-md px-8 py-6 text-center">
          <h1 className="text-2xl font-bold mb-3">Tic Tac Toe</h1>
          <p className="text-lg font-semibold mb-4">Winner: {winner}</p>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded-full bg-slate-800 text-white text-sm hover:bg-slate-700"
          >
            Reset
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="p-6 rounded-md shadow-sm bg-white border flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold">Tic Tac Toe</h1>

        <div className="grid grid-cols-3 gap-2">
          {board.map((item, index) => (
            <div
              key={index}
              onClick={() => handeClick(index)}
              className="w-20 h-20 flex items-center justify-center border text-2xl font-bold hover:bg-gray-200 cursor-pointer transition-all border-black"
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={handleReset}
          className="mt-2 px-4 py-1 rounded-full border text-sm text-slate-700 hover:bg-slate-100"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
