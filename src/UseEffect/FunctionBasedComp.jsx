//! Component Did Mount in FBC

import React, { useState, useEffect } from 'react'

const FunctionBasedComp = () => {
  let [count, setCount] = useState(0);
  let inc = () => {
    setCount(count + 1);
  };
  //! to make Comp Unmount
  // useEffect(() => {
  //   console.log("no render Use Effect but it Render many Times");
  // }, []);// if we pass empty array as second parameter it is alt for component did Mount
  //! to make Comp Update
  useEffect(() => {
    console.log("no render Use Effect but it Render many Times");
  }, [{count}]);// if we pass Updating state in array as second parameter it is alt for component Update
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
    </div>
  );
}

export default FunctionBasedComp