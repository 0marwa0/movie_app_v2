import React, { useState } from "react";

function useCounter(iniailValue = 0) {
  const [count, setCount] = useState(iniailValue);
  const increase = () => {
    setCount((prevState) => prevState + 1);
  };

  return [count, increase];
}

export default useCounter;
