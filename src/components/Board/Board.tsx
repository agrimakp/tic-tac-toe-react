import { useState } from "react";
import { calculateWinner } from "../../ticTacToe";
import { Square } from "../Square/Square";
export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  const handleClick = (item: any, index: number) => {
    const temp = squares.slice();
    //ignore a click if someone wins
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    temp[index] = xIsNext ? "X" : "0";
    setSquares(temp);
    setxIsNext(!xIsNext);
  };

  const renderSquare = (item: any, index: number) => {
    const onPressSquare = () => {
      handleClick(item, index);
    };
    return <Square value={item} onPress={onPressSquare} />;
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setxIsNext(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div>{status}</div>
      <div className="w-96 h-96 border grid grid-cols-3 grid-rows-3 mt-4 bg-slate-900">
        {squares.map(renderSquare)}
      </div>
      <button className="border text-white mt-5 p-2 text-lg" onClick={reset}>
        RESET
      </button>
    </div>
  );
}
