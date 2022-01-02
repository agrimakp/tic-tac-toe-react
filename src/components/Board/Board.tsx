import { Square } from "../Square/Square";
export function Board() {
  return (
    <div className="w-96 h-96 border grid grid-cols-3 grid-rows-3">
      <Square value="X" />
      <Square value="0" />
      <Square value="X" />
      <Square value="0" />
      <Square value="X" />
      <Square value="0" />
      <Square value="X" />
      <Square value="0" />
      <Square value="X" />
    </div>
  );
}
