import { useState } from "react";
import { Square } from "../Square/Square";
export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);

  console.log(squares);

  const handleClick = (item: any, index: number) => {
    console.log("clicked", item, index);
    const temp = squares.slice();
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

  const status = "Next Player :" + (xIsNext ? " X " : " 0 ");

  return (
    <div>
      <div>{status}</div>
      <div className="w-96 h-96 border grid grid-cols-3 grid-rows-3">
        {squares.map(renderSquare)}
      </div>
    </div>
  );
}
