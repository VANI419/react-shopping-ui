 
import React from 'react'
import ClickEvent from './ClickEvent'
import FormExample from './FormExample'
import  './App.css'
import SampleArray from './SampleArray'
import SampleArrayObjects from './SampleArrayObjects'
import NestedArrayObject from './NestedArrayObject'
import TempLit from './TempLit'
import UserPage from './UserPage'
import EMployee from './EMployee'
import CrudApp from './CrudApp'
import NameCrudApp from './NameCrudApp'
import image from './image'
import Apps from './Apps'
import Animal from './Animal'
import Plants from './plants'


const App = () =>{
  return(
    <div>
      <h1>Welcome to The react</h1>
      <h1>Hiii</h1>
      {/* <FormExample />  */}
    {/* <SampleArray /> */}

 {/*<SampleArrayObjects />*/} 
{ /*<NestedArrayObject />  */}
 { /* <TempLit />  */}
{/* <ClickEvent />*/}
 {/*<UserPage /> */}
  <EMployee />   
{/* <CrudApp />  */}
{/*  <NameCrudApp />*/} 
  {/*<image />*/} 
{/* <Apps /> */}
 {/* <Animal /> */} 
 <Plants /> 

    </div>
  )
}

export default App