import React from "react";
import Message from "./message";

function Counter() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container card p-4">
      <div className="fs-1">Counter is: {count}</div>
      <div className="row my-4">
        {/* increase button */}
        <div className="col-6 text-center">
          <button className="btn btn-danger mx-4" onClick={increase}>
            Increase by 1
          </button>
        </div>
        {/* decrease button */}
        <div className="col-6 text-center">
          <button className="btn btn-primary mx-4" onClick={decrease}>
            Decrease by 1
          </button>
        </div>
      </div>
      <Message msg="Hi from counter app" />
    </div>
  );
}
export default Counter;
