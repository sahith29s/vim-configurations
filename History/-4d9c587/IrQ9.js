import React from 'react'

const index = (props) => {
    
    const oncli = async () =>{
        props.title()
    };

  return (
    <>
    

    <button onClick={oncli}>button </button> 
    
    </>
  )
}

export default index