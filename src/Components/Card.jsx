import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import doctorIMG from '../assets/doctor.jpg'
import './Card.css'

const reducer = (state, action) => {
  
  const  {type, payload} = action

  switch (type) {
    case 'ADD_FAV':
      return [...state, payload]
    default:
      return state
  }
}


const Card = ({ name, username, id }) => {

  const [state, dispatch] = useReducer(reducer, [])

  const addFav = () => {
    const favJSON = JSON.parse(localStorage.getItem('fav')) || [];
    let ids = favJSON.map(item => item ? item.id : null);
    if (!ids.includes(id)) {
      dispatch({ type: 'ADD_FAV', payload: { name, username, id } });
    }
  }

  useEffect(() => {
    console.log("Se actualizo el estado");
    const favJSON = JSON.parse(localStorage.getItem('fav')) || [];
    if(state[state.length - 1] !== undefined)
      favJSON.push(state[state.length - 1]);
      localStorage.setItem('fav', JSON.stringify(favJSON));
  }, [state]);

  return (
    <div className="card">

      <Link to={`dentista/${id}`}>
        <div className="cardDoc">
          <img src={doctorIMG} alt="" />
          <h3>{name}</h3>
          <p>{username}</p>
        </div>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
