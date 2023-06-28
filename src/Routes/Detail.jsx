import React, {useContext} from 'react'
import LayoutMain from '../Components/LayoutMain'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {

  const params = useParams()
  const {dataApiMemo} = useContext(ContextGlobal);
  const dentistaMostrar = dataApiMemo.filter(dentista => dentista.id === parseInt(params.id))

  return (
    <LayoutMain>
      <div className='cardDentist'>
        <h1>Detail Dentist</h1>
        <h4>{dentistaMostrar[0].name}</h4>
        <p>{dentistaMostrar[0].email}</p>
        <p>{dentistaMostrar[0].phone}</p>
        <p>{dentistaMostrar[0].website}</p>
      </div>
    </LayoutMain>
  )
}

export default Detail