import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navba from "../navbar/Navbar"
import Register from "../registro/Registrp"
import Login from "../login/login"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nuevo-usuario" element={<Register />} />
        <Route path="/" element={<Login />} /> {/* Ruta para el componente Login dentro de Navba */}
        <Route path="/Navbar" element={<Navba />}> {/* Carga Navba en la ruta raíz */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
