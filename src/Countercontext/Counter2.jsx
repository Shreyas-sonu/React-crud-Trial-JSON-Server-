import React from "react";
import { useContext } from "react";
import { CountSet } from "./CountContext";

const Counter2 = () => {
  let { count, inc, dec, res } = useContext(CountSet);
    console.log(count);
  return (
    <section>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={res}>Reset</button>
      <button onClick={dec}>-</button>
    </section>
  );
};

export default Counter2;
