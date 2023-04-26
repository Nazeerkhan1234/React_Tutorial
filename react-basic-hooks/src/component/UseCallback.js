import React, { useCallback, useState } from "react";
import ChildC from "./ChildC";
function UseCallback() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const learning = useCallback(() => {
    //hiohog
  }, [count]);
  return (
    <>
      <h1>Add {add}</h1>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h1>count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <ChildC learning={learning} count={count} />
    </>
  );
}
export default UseCallback;
