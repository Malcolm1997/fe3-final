import LayoutMain from '../Components/LayoutMain'
import { useContext } from 'react'
import  Card  from '../Components/Card.jsx'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {dataApiMemo} = useContext(ContextGlobal)

  



  return (
    <LayoutMain>
      <h1>Home</h1>
      <div className='card-grid'>

        {dataApiMemo && dataApiMemo.map((item) => <Card name={item.name} username={item.username} id={item.id} key={item.id} />) }

      </div>
    </LayoutMain>
  )
}

export default Home