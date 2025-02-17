import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (state.state) {
    case "PRESSED_ONCE":
      return {
        state: "PRESSED_TWO",
      };
    case "PRESSED_TWO":
      return {
        state: "PRESSED_TREE",
      };
    case "PRESSED_TREE":
      return {
        state: "PRESSED_ONCE",
      };
  }
};
const Button = (props) => {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    state: "PRESSED_ONCE",
  });
  return (
    <div
      style={{
        color: props.color,
        textDecoration: props.underline ? "underline" : undefined,
      }}
      onClick={() => dispatch()}
    >
      I am button {state.state}
    </div>
  );
};

const StateMachineReducer = () => {
  return <Button />;
};

export default StateMachineReducer;
