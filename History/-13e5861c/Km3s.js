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
  } else if (RealTime >= 12 && RealTime < 19) {
    view = "It's Evening now abhi be cill marr";
  } else if (RealTime >=19 && RealTime <= 24) {
    view = "It's night now abhi be cill marr";
  }

  if (view == "It's morning Dude Chill marr") {
    let SpanView = document.getElementById("SpanView")
    SpanView.style = {
      color : "red"
    }
    
  }
  return (
    <>
      <div> its's , <span id="SpanView"> {}</span></div>
    </>
  );
};

export default App;

