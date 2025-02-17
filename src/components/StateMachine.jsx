import React, { useState } from "react";

const StateMachine = () => {
  const [state, setState] = useState("idle");

  const clicked = () => {
    setState("loading");
    fetch("./data.json")
      .then((data) => {
        try {
          //console.log(JSON.parse(data));
          setState("loaded");
        } catch (error) {
          setState("req-err");
        }
      })
      .catch((error) => {
        setState("network-err");
      });
  };

  if (state === "loading") return <div>Loading...</div>;
  if (state === "req-err") return <div>Server reponse error</div>;
  if (state === "network-err") return <div>Network error </div>;

  return <div onClick={() => clicked()}>Current state : {state}</div>;
};

export default StateMachine;
