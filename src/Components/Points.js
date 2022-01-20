


import React, { useEffect, useState } from "react";

export default function Points() {
  let [count, setCount] = useState(0);
  const increment = () => setCount(count + 100);
  const decrement = () => setCount(count - 100);
  const add500 = () => setCount(count + 500);
  const sub500 = () => setCount(count - 500);
  const reset = () => setCount(0);
  let [showCount, SetShowCount] = useState(false);

  useEffect(() => {
    console.log("app component mounted. ");
  }, []);
  

return (
    <div className="scoreDiv">
        <center>
      <h3>Your Score={count}</h3>
      
      <button onClick={increment}>add</button>
      <button onClick={decrement}>subtract</button>
      <button onClick={add500}>+ 500</button>
      <button onClick={sub500}>- 500</button>
      <button onClick={reset}>reset</button>
      </center>
      {/* use state is just a function that returns an array */}
      {/* let arr = useState() [first value is the state, second vlaue is a special method for changing the state similar to set state] */}
      {/* [state, setState] */}
    </div>
  );

}
