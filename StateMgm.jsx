

import React from 'react'

import { useState } from 'react'
const StateMgm = () => {
    const[city,setcity] = useState("Banglore")
    if(city === "Banglore"){
        setcity("Hyderabad")
    }
  return (
    <div>
       <h1> I live in {city} </h1> 
    </div>
  )
}

export default StateMgm