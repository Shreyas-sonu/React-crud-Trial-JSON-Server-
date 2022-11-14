import React, { createContext, useState } from "react";

export let CountSet = createContext();
let CountContext = ({ children }) => {
  let [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
  };
  let dec = () => {
    setCount(count - 1);
  };
  let res = () => {
    setCount(0);
  };
  return (
    <CountSet.Provider value={{ count, inc, dec, res }}>
      {children}
    </CountSet.Provider>
  );
};
export default CountContext;
