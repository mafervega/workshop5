import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navba from "../navbar/Navbar"

const Router = () =>{
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navba/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
