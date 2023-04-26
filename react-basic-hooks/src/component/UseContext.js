import React, { createContext } from "react";
import { Child1 } from "./Child1";
const data1 = createContext();
const data2 = createContext();
export const UseContext = () => {
  const name = "Khan bhai";
  const gender = "Male";
  return (
    <div>
      <data1.Provider value={name}>
        <data2.Provider value={gender}>
          <Child1 />
        </data2.Provider>
      </data1.Provider>
    </div>
  );
};
export {data1,data2}