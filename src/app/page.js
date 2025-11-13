"use client";

import { useState } from "react";

export default function Home() {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (cells) => {
  
    for (const [a, b, c] of winningLines) {
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
  };

  const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const winner = checkWinner(board);
    const isDraw = !winner && board.every((cell) => cell !== null);

    const getStatus = () => {
      if (winner) return "Winner: " + winner;
      if (isDraw) return "Draw";
      return "Next: " + (isXNext ? "X" : "O");
    };

    const statusText = getStatus();

    return <p>{statusText}</p>;
  };

  return <TicTacToe />;
}
