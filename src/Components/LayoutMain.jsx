import Navbar from './Navbar'
import Footer from './Footer'

const LayoutMain = ({children}) => {
    return (
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}

export default LayoutMain