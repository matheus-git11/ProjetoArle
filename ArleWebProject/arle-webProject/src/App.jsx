import { Route, Routes } from "react-router-dom"

import Home from "./Routes/Home/Home.Component"
import Login from "./Routes/Login/Login.Component"
import Register from "./Routes/Register/Register.Component"
import ForgottenPassword from "./Routes/ForgottenPassword/ForgottenPassword.Component"

function App() {

  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="ForgottenPassword" element={<ForgottenPassword/>}/>
      <Route/>
  
    </Routes>
  )
}

export default App
