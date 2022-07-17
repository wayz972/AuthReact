import { createContext,useEffect,useState } from "react";

// partie FIREBASE ethode 
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'

import { auth } from "../firebase-config";

// je crée un context qui va me permettre de tt recuperer
export const  UserContext = createContext()

 //je crée un provider (un composant d'ordre supérieur ) il va retouner mon context 
export function UserContextProvider(props){

// create user
  const [currentUser,setcurrentUser]=useState();
  const [loadingData,setloadingData]=useState(true);

//methode firebase create user
  const signUp =(email,pwd)=> createUserWithEmailAndPassword(auth,email,pwd)

//methode firebase connect  user
  const signin =(email,pwd)=> signInWithEmailAndPassword(auth,email,pwd)

  //on va observer si l'utilsateur est connecter ou 
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setcurrentUser(currentUser)
    setloadingData(false)
   
  })
  return unsubscribe;

  },[])
  

  //partie MODAL {ouvre ou fermer}
    const [modalState,setModalstate]=useState({
        singupModal:false,
        singinModal:false,

    })


      //partie MODAL {ouvre ou fermer}
    const  togglemodals=(modal)=>{
  if(modal === "signin"){
    setModalstate({
        singupModal:false,
        singinModal:true,
    })
  }
  if(modal === "signup"){
    setModalstate({
        singupModal:true,
        singinModal:false,
    })
  } if(modal === "close"){
    setModalstate({
        singupModal:false,
        singinModal:false,
    })
  }
    }

return (
    <UserContext.Provider value={{modalState,togglemodals,signUp,signin,currentUser}}>
        {!loadingData && props.children}
    </UserContext.Provider>

)
}