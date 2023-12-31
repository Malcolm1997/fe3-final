import React from 'react'
import Form from '../Components/Form'
import LayoutMain from '../Components/LayoutMain'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <LayoutMain>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </LayoutMain>
  )
}

export default Contact