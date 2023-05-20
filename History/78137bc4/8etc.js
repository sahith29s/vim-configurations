const add = (a , b) =>{
  return a + b
}

const div = (a, b)=>{

  let after = a /b
  after = after.toFixed(2)
  return after
}

export {add, div }