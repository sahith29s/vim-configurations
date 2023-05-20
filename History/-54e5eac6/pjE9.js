import { useState } from 'react';
import React from 'react'

const App = () => {
  const [number, setnumber] = useState(0)

  const onHandle = async () => {
    setnumber(number+1)
  };


  return (
    <>

      <div>{number}</div>
      <button onClick={onHandle}>button</button>


    </>
  )
}

export default App