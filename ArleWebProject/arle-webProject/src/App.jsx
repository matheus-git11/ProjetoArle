import { Route, Routes } from "react-router-dom"

import Home from "./Routes/Home/Home.Component"
import Login from "./Routes/Login/Login.Component"
import Register from "./Routes/Register/Register.Component"
import ForgottenPassword from "./Routes/ForgottenPassword/ForgottenPassword.Component"
import Dashboard from "./Routes/Dashboard/Dashboard.Component,"
import About from "./Routes/About/About.component"
import Performance from"./Routes/PerformanceDashboard/PerformanceDashboard.Component"

function App() {

  return (
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="ForgottenPassword" element={<ForgottenPassword/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/sobre" element={<About/>}/>
      <Route path="/performance" element={<Performance/>}/>
    </Routes>
  )
}

export default App
