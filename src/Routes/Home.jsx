import React from 'react'
import Card from '../Components/Card'
import LayoutMain from '../Components/LayoutMain'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <LayoutMain>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </LayoutMain>
  )
}

export default Home