import React, { useState } from "react";
import styled from "styled-components";

export default function NumberCounter() {
  const [counter, setCounter] = useState(0);

  const Button = styled.button`
    margin: 0.5em;
  `;

  const Div = styled.div`
    text-align: center;
  `;

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <Div>
      <h1>{counter}</h1>
      <Button onClick={Increment}>Add</Button>
      <Button onClick={Decrement}>Subtract</Button>
    </Div>
  );
}
