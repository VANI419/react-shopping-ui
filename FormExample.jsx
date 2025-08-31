 /*import React from 'react';  */
import React, { useState } from 'react'


  import { ToastContainer, toast } from 'react-toastify';

const FormExample = () => {
const[userName,setUserName]= useState("")
 const[newUserdetails,setNewUserDetails] = useState()
 const notify = () => toast("Wow so easy!");
const getUserName =(event) =>{
setUserName(event.target.value)
}
const useerDetails =(e) =>{
    e.preventDefault()
    setNewUserDetails(userName)
    notify()
}



  return (
    <section className='formSection'>
        <h2>Hello,{newUserdetails}</h2>
        <ToastContainer />
        <div className='inputDiv'>
          <form onSubmit={useerDetails}>
            <input type="text"  placeholder='Enter your name' onChange={getUserName}/> 
            <br />      
             <button className='submitBtr' onClick={useerDetails}>Submit</button>
             </form>
        </div>
    </section>
  )
}

export default FormExample