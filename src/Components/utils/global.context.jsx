import { createContext, useReducer } from "react";
import { useState, useEffect, useMemo } from "react";




export const initialState = []

export const ContextGlobal = createContext(initialState);

export const temaReducer = (state, action) => {
  switch (action.type) {
    case "OSCURO":
      return "oscuro";
    case "CLARO":
      return "claro";
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataApi, setDataApi] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setDataApi(json))
      .catch(error => console.log(error));
  }, []);

  const dataApiMemo = useMemo(() => dataApi, [dataApi]);

  const [tema, dispatch] = useReducer(temaReducer, "claro");

  const cambiarTema = () => {
    if (tema === "claro") {
      dispatch({ type: "OSCURO" });
    } else {
      dispatch({ type: "CLARO" });
    }
  }


  return (
    <ContextGlobal.Provider value={{dataApiMemo, cambiarTema, tema}}>
      {children}
    </ContextGlobal.Provider>
  );
};
