import React,{useContext} from 'react'

//récuper le  context
import { UserContext } from '../context/UserContext'
// Outlet=>permet de montrer les route 
// uselocation => nouos permet d'avoir des informations la location
//navigate =>permet de naviger
import {Outlet,uselocation,Navigate} from "react-router-dom"
export default function Private() {

  

    const {currentUser}=useContext(UserContext)
    console.log("private",currentUser)

    if(!currentUser){
         return <Navigate to="/"/>
    }
  return (
    <div className='container'>
        {/* outlet => permet de montrer  la route inbriquer ici */}
       <Outlet/>
    </div>
  )
}
