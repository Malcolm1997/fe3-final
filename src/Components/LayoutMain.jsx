import Navbar from './Navbar'
import Footer from './Footer'
import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const LayoutMain = ({children}) => {

    const {tema} = useContext(ContextGlobal)

    return (
        <>
        <Navbar/>
        <main className={tema === "oscuro" ? "dark" : ""}>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default LayoutMain