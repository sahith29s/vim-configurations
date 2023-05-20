// import React from 'react'
// const man = async ()=>{

// const App = () => {
//   return (
//    <>

//     <div id="goodmorning">

//     </div>
//    </>
//   )

// export default App

import React from "react";

const App = () => {
  let view = "";
  let RealTime = new Date().getHours();
  // let RealTime = new Date(2023, 5, 5, 20) 
  if (RealTime >= 0 && RealTime < 12) {
    view = "It's morning Dude Chill marr";
    let SpanView = {color : "red"}
  } else if (RealTime >= 12 && RealTime < 19) {
    view = "It's Evening now abhi be cill marr";
  } else if (RealTime >=19 && RealTime <= 24) {
    
  }

  
    
  return (
    <>
      <div> its's , <span style = "{SpanView}"> {view}</span></div>
    </>
  );

  }

export default App;

