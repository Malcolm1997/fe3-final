import { createContext } from "react";
import { useState, useEffect } from "react";




export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataApi, setDataApi] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setDataApi(json))
      .catch(error => console.log(error));
  }, []);
  return (
    <ContextGlobal.Provider value={dataApi}>
      {children}
    </ContextGlobal.Provider>
  );
};
