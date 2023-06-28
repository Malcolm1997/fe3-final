import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'


const Navbar = () => {
  
  const { cambiarTema, tema } = useContext(ContextGlobal);

  return (
    <nav className={tema === "oscuro" ? "dark" : ""} >
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favoritos</Link>
      </div>
      <div>
        <button onClick={cambiarTema}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar