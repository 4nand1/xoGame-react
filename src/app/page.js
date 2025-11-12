"use client"

import { useState } from "react";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = (s) => {
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
      if (s[a] && s[a] === s[b] && s[a] === s[c]) return s[a];
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw"
    : `Next: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    if (winner || squares[i]) return;
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Tic-Tac-Toe</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 80px)",
            gap: "8px",
            margin: "16px 0",
          }}
        >
          {squares.map((v, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: "80px",
                height: "80px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                fontSize: "32px",
                fontWeight: 600,
                background: "#fff",
                cursor: "pointer",
              }}
            >
              {v}
            </button>
          ))}
        </div>
        <div style={{ marginBottom: 8, fontWeight: 500 }}>{status}</div>
        <button
          onClick={reset}
          style={{
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid #000",
            background: "#000",
            color: "#fff",
          }}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
