import { useState } from 'react';
import React from 'react'
import AddVideo from './components/AddVideo';

const App = () => {
  const [number, setnumber] = useState(0)

  const onHandle = async () => {
  setnumber(number+1)
  };


  return (
    <>


<AddVideo/>

    </>
  )
}

export default App