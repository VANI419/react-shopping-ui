import React from 'react'
let sampleArray = ["Apple", "Mango", 35, {userName:"Pandu"}]


const SampleArray = () => {
  return (
    <div>
        {sampleArray [1]}
        <h2>{sampleArray[0]} is Red in color</h2>
        <h2>Your age is {sampleArray[2]}</h2>
        <h2>Your Name is {sampleArray[3]}</h2>
    </div>
  )
}

export default SampleArray