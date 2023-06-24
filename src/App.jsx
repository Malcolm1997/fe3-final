
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";

function App() {

  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
        <Route path="/dentista/:id" element={<Detail/>} />
      </Routes>
    </ContextProvider>
  );
}

export default App;
