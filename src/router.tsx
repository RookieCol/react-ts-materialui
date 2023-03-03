import React from "react"
import {Route, Routes} from "react-router-dom"
import { HomePage } from "./pages/home"
import { Loginpage } from "./pages/login"
import { RouterLayout } from "./common/RouterLayout"
export const AppRouter:React.FC<{}> = ()=>{
return (
    <Routes>
        <Route path='/' element={<RouterLayout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Loginpage/>}/>
        </Route>
        <Route path='/noNavBar' element={<h1>Example no NavBar</h1>}/>
        
    </Routes>
)
}