
import React from 'react'

let fruits = ["apple", "Mango"]

let players= [
    {
        cricket:"Dhoni",
        tennis:"Sania",
        Chess:"Anand",
        Hockey:"Dyan Chand"
    }
]

const SampleArrayObjects = () => {
  return (
    <div>
    {players.map((item)=>{
    return(
        <div>
         <h2> My Fav Cricketer {item.cricket} </h2>   
         <h2> My Fav Player in Tennis {item.tennis}</h2>
         <h2> My Fav Player in Chess {item.Chess}</h2>
         <h2> My Fav Player in Hockey {item.Hockey}</h2>
        </div>
    )
})}
 
 
    </div>
  )
}

export default SampleArrayObjects