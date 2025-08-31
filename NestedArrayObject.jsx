 
 import React from 'react'
 
 import {userData} from './data'
let fruits = ["apple", "Mango"]

let players= [
    {
        cricket:"Dhoni",
        tennis:"Sania",
        Chess:"Anand",
        Hockey:"Dyan Chand"
    }
]

const NestedArrayObject = () => {
  return(
    <div>
        {userData.map((user)=>{
            return(
                <div style={{border:"1px solid blue"}}>
                    <div> {user.username}</div>
                    <div> {user.email}</div>
                    <div> {user.address.street}</div>
                </div>

            )
        })}
    </div>
  )
  
}
 
 export default NestedArrayObject