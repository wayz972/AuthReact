
import React,{useContext,useRef,useState} from 'react'
// permet de naviger dans mon application
import {useNavigate} from 'react-router-dom'
//récuper le  context
import { UserContext } from '../context/UserContext'


export default function SignUpModal() {
 //recupererle hook useNavigate
const navigate=useNavigate();

  //usecontext me permet d'utiliser un context 
  const {modalState,togglemodals,signUp}=useContext(UserContext)
  
  const [Validation, setValidation]=useState("");

// reset input 
   const  formRef= useRef();

  // useref serre a sélectionner des elements (inputs)grace avec useref
  const input =useRef([]) 
  const addInput=(el)=>{
    // je verifier si il existe  dans le tableau
   if (el && !input.current.includes(el))
   input.current.push(el)
  }
  
  // send formulaire 
  const handForm = async(e)=>{
  e.preventDefault()
   //verification longeur
  if((input.current[1].value.length || input.current[2].value.length) < 6 ){
    setValidation("6 characters min")
    // concordance password
  }else if (input.current[1].value != input.current[2].value){
    setValidation("passwords do not match")
  }
 // add user in firebase
  try {
      const cred = await signUp(input.current[0].value,input.current[1].value)
      formRef.current.reset();
      setValidation("");
      console.log(cred)
      // redirection 
      navigate("/private/Private-Home")
      togglemodals("close")

  } catch (error) {
    //je recupere les errors dans firebase
    console.dir(error)
    if(error.code === "auth/invalid-email"){
      setValidation("Email format invalid")
    }if(error.code === "auth/email-already-in"){
      setValidation("Email already used")
    }
  }
  }

   //fermeture de la modal
  const closeModal =()=>{
    togglemodals("close")
    setValidation("")

  }
  
  return (
    <>
    {/* quand modalState.singupModal(true) je montre le reste */}
    {modalState.singupModal &&(

   
   <div className='position-fixed top-0 vw-100 vh-100 '
   >
      <div className="w-100 h-100 bg-dark bg-opacity-75 "
      onClick={closeModal}>
      </div>
        <div className="position-absolute top-50 start-50 translate-middle " style={{minWidth:"400px"}}>
            <div className="modal-dialog bg-light">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">sign up</h5>
                        <button className="btn-close" onClick={closeModal}  ></button>
                        
                    </div>
                    <div className="modal-body">.
                      <form action="" className="sign-up-form" onSubmit={handForm} ref={formRef}>

                        <div className="mb-3">
                          <label className='form-label' htmlFor="signUpEmail">Email</label>
                          <input type="email" name='email'id='signUpEmail' className="form-control" 
                          ref={addInput}/>
                        </div>
                        <div className="mb-3">
                          <label className='form-label' htmlFor="signUpPassword">Password</label>
                          <input type="password" name='pwd'id='signUpPassword' className="form-control"
                          ref={addInput} />
                        </div>
                        <div className="mb-3">
                          <label className='form-label' htmlFor="repeatPwd">Repeat Password</label>
                          <input type="password" name='rpwd'id='repeatPwd' className="form-control"
                          ref={addInput} />
                          <p className="text-danger mt-1">{Validation}</p>
                        </div>
                        <button className="btn btn-primary">submit</button>
                      </form>
                          
                        </div>
                </div>
            </div>

        </div>
      
   </div>


  )}
    </>
  )
}
