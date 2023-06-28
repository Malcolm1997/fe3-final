import React, { useEffect } from "react";
import LayoutMain from "../Components/LayoutMain";
import { useState } from "react";
import Card from "../Components/Card";

const Favs = () => {

  const [dentistas, setDentistas] = useState([])

  useEffect(()=>{
    setDentistas(JSON.parse(localStorage.getItem('fav')))
  }, [])

  return (
    <LayoutMain>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {
          dentistas.map(dentista =>  <Card name={dentista.name} username={dentista.username} id={dentista.id} key={dentista.id} />)
        }
      </div>
    </LayoutMain>
  );
};

export default Favs;
