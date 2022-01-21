import React, {  useState } from "react";

export default function Points(props) {
  let [count, setCount] = useState(0);
  const increment = () => setCount( count + props.points);
  const decrement = () => setCount( count - props.points);
  const reset = () => setCount(0);

  


  return (
    <div className="scoreDiv">
      <center>
        <h3>Your Score={count}</h3>

        <button onClick={increment}>Right!</button>
        <button onClick={decrement}>Wrong!</button>
        <button onClick={reset}>Start Over!</button>
        {console.log(props.value)}
      </center>
    </div>
  );
}
