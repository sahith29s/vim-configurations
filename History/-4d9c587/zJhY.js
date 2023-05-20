import React from 'react'

const index = (props) => {
    
    const oncli = async () =>{
        props.title()
    };

  return (
    <>
    
    <div onClick={oncli}></div> 
    
    
    </>
  )
}

export default index