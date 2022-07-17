import React,{useContext} from 'react'
//importer des liens avec le router
import {Link, useNavigate} from "react-router-dom"

import { signOut } from 'firebase/auth'

 import { auth } from '../firebase-config'

import { Navigate } from 'react-router-dom'

import { UserContext } from '../context/UserContext'
import { async } from '@firebase/util'

export default function Navbar() {


 const navigate= useNavigate();


 const logout = async()=>{
    try {
         await signOut(auth)
         navigate("/")
    } catch (error) {
       alert("deconnexion impossible")
    }
 }
  //usecontext me permet d'utiliser un context 
  const {modalState,togglemodals,}=useContext(UserContext)
  return (
    <nav className='navbar navbar-light bg-light px-4'>
<Link to ="/" className='navbar-brand'>
AuthJs
</Link>

{/* le menu */}
<div>
    <button className="btn btn-primary" onClick={()=>togglemodals("signup")}> Sign Up</button>
    <button className="btn btn-primary ms-2" onClick={()=>togglemodals("signin")}> Sign In</button>
    <button className="btn btn-danger ms-2" onClick={logout}> Login Out</button>

</div>
    </nav>


  )
}
