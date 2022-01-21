import React, { useState, useEffect } from "react";
import axios from "axios";
import Points from "./Points";

function Jeopardy() {
  const [gameShow, setGameShow] = useState([]);
  const [hideAnswer, setHideAnswer] = useState(false);

  //gets the data//
  useEffect(() => {
    axios
      .get("http://jservice.io/api/random")
      .then((response) => {
        console.log(response.data);
        setGameShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function nextQ() {
    axios
      .get("http://jservice.io/api/random")
      .then((response) => {
        console.log(response.data);
        setGameShow(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (

    <div className="gameDiv">
      
      {gameShow.map((gameShow, index) => (
        <div key={index}>
          <button onClick={() => nextQ()}>Next Question</button>
          <p>Category: {gameShow.category.title}</p>
          <p>Points: {gameShow.value}</p>
          <p>Answer: {gameShow.question}</p>
          <Points points={gameShow.value}/>
          {console.log(gameShow.value)}
          <button onClick={() => setHideAnswer(!hideAnswer)}>What is?</button>
          {hideAnswer ? <p id="answerDiv">Question: {gameShow.answer}</p> : null} <br />
        </div>
      ))}
    </div>
  );
}

export default Jeopardy;
