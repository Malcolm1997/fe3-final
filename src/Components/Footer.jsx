import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const {tema} = useContext(ContextGlobal)

  return (
    <footer className={tema === "oscuro" ? "dark" : ""} >
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
