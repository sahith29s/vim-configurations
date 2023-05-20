import React from 'react'

const AddVideo = () => {
  return (
    < >
    <form>
        <input type="text" onChange={handleChange} placeholder="title"/>
        <br />
        <br />
        <input type="text" onChange={handleChange} placeholder='views' />
        <button onClick={handleSubmit}>submit</button>
    </form>
    
    </>
  )
}

export default AddVideo