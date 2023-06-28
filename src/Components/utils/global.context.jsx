import { createContext } from "react";
import { useState, useEffect, useMemo } from "react";




export const initialState = []

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataApi, setDataApi] = useState([]);
  const [dataApiFav, setDataApiFav] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setDataApi(json))
      .catch(error => console.log(error));
  }, []);

  const dataApiMemo = useMemo(() => dataApi, [dataApi]);


  return (
    <ContextGlobal.Provider value={{dataApiMemo, setDataApiFav, dataApiFav}}>
      {children}
    </ContextGlobal.Provider>
  );
};
