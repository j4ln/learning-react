import { useState } from "react";
import Board from "./Board";
import { SquareValue } from "./Square";

export default function Game() {
  const [history, setHistory] = useState<SquareValue[][]>([
    Array(9).fill(null),
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: SquareValue[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(currentMove + 1);
  }

  function jumpTo(moveIndex: number) {
    setCurrentMove(moveIndex);
  }

  const moves = history.map((_squares, index) => {
    let description;

    if (index == currentMove) {
      if (index == 0) {
        description = "You are at game start";
      } else {
        description = `You are at move #${index}`;
      }
    } else {
      if (index == 0) {
        description = "Go to game start";
      } else {
        description = `Go to move #${index}`;
      }
    }

    return (
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          currentMove={currentMove}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
