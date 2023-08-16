import Header from '../header/Header'
import Publicacion from '../publicacion/Publicacion'
import Story from '../story/Story'
import { Outlet } from "react-router-dom"


const Navba = () => {
  return (
    <div>
        <Header/>
        <Story/>
        <Publicacion/>
        <Outlet/>
    </div>
  )
}

export default Navba