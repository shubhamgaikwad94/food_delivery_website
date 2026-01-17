import React, { createContext, useState } from "react";
import {food_items} from '../food'
export const dataContext = createContext();

const UserContext = ({ children }) => {
    let [cate,setCate]=useState(food_items)
    let [input, setInput] = useState("");
    let [showCart,setShowCart]=useState(false)



  return (
    <dataContext.Provider value={{ input, setInput,cate,setCate,showCart,setShowCart }}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
