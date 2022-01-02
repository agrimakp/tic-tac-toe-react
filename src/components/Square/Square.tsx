import { useState } from "react";

type PropTypes = {
  value: string;
  onPress: any;
};

export function Square(props: PropTypes) {
  const onClick = () => {
    props.onPress();
  };

  return (
    <button className="border w-32 h-32" onClick={onClick}>
      {props.value}
    </button>
  );
}
