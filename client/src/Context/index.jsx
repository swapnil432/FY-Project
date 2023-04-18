import React, { useReducer, createContext, useEffect } from "react";

const initialState = {
  user: null,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  let clearAccount = ()=>{
    dispatch({
      type: "LOGOUT",
    });
    window.localStorage.removeItem("user");
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.addListener('accountsChanged', clearAccount);
      console.log("window ethereum exists")
      return () => {
        window.ethereum.removeListener('accountsChanged', clearAccount);
      };
    }

  }, [])
  
  useEffect(() => {
    // window.onunload = function () {
    //   dispatch({
    //     type: "LOGOUT",
    //   });
    //   window, localStorage.removeItem("user");
    // };

    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
