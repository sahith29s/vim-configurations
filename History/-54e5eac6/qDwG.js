import { useState } from 'react';
import React from 'react'

const [number, setnumber] = useState(0)

const onHandle = async () =>{
  setnumber(number++)
};
const App = () => {
  return (
  <>
  
  <div>number</div>
  <button onClick={onHandle}></button>
  
  
  </>
  )
}

export default App