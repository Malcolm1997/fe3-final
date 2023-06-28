import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import doctorIMG from '../assets/doctor.jpg'
import './Card.css'

const reducer = (state, action) => {
  
  const  {type, payload} = action

  switch (type) {
    case 'ADD_FAV':
      return [...state, payload]
    case 'REMOVE_FAV':
      return state.filter(item => item.id !== payload.id)
    default:
      return state
  }
}


const Card = ({ name, username, id }) => {

  const [state, dispatch] = useReducer(reducer, [])

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const favJSON = JSON.parse(localStorage.getItem('fav')) || [];
    if (!favJSON.includes(id)) {
      dispatch({ type: 'ADD_FAV', payload: {id} });
      favJSON.push(id);
      localStorage.setItem('fav', JSON.stringify(favJSON));
    }
  }


  return (
    <div className="card">

      <Link to={`dentista/${id}`}>
        <div className="cardDoc">
          <img src={doctorIMG} alt="" />
          <h3>{name}</h3>
          <p>{username}</p>
        </div>

      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
