
import React from 'react'
import { useState } from 'react'

const ClickEvent = () => {
    const[number,setnumber]=useState(0)

    const Increament =()=>{
        setnumber (number + 1)
    }

    const Decreament =()=>{
        if(number>0){
        setnumber (number - 1)
        }
    }

    const reset=()=>{
        setnumber(0)
    }

  return (
    <div>
        <h1>{number}</h1>
    <button onClick={ Increament}>Increament</button>
    <button onClick={ Decreament}>Decreament</button>
    <button onClick={ reset}>Reset</button>
</div>
  )
}

export default ClickEvent