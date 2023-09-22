// import logo from './logo.svg';
// import { useState } from "react"

// function App() {
//   let array = ["play cricket", "play video game", "read boo"]
//   const [listArray, setListArray] = useState([...array])



//   const handleCheck = (item , index) => {

//   };
//   const handleDelete = (index) => {
//     let filteredArray = listArray.filter((elemnt) => {
//       return elemnt !== listArray[index]
//     })
//     setListArray([...filteredArray]) 
//   }

//   return (
//     <div className="App">
//       <ul>
//         {
//           listArray.map((item, index, arrary) => {

//             return <li key={index}>
//               <span><input type="checkbox" onClick={() => handleCheck(item , index)} /></span>
//               {item}
//               <span>
//                 <button onClick={() => handleDelete(index)}>Delete</button>
//               </span>
//             </li>
//           })
//         }

//       </ul>


//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react'

// const array = [
//   { username: "sahith" },
//   { username: "krishna dev" },
//   { username: "rigved" },
//   { username: "gourav" },
//   { username: "pradeep" },
// ]
// const App = () => {
//   const [arr, setarr] = useState(array)
//   const handleDelete = (index) => {
//     let emptyArry = arr.filter(item =>{
//       return arr[index] !== item
//     })
//     setarr(emptyArry)


//   };
//   return (
//     <>
//       {arr.map((value, index) => {
//         return <div>{value.username}
//           <span>
//             <button onClick={() => { handleDelete(index) }}>delete</button>
//           </span></div>
//       })}
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'

const countries = [
  {
    name: "india", cities: ["delhi", "hyderabd"]
  },
  {
    name: "pakisthan", cities: ["ladakh", "karachi"]
  }
]
const App = () => {

  const [indexStore , setIndexStore] = useState(0)
  const [country, setCountry] = useState(countries)

  return (
    <>
      <select onChange={(e) => setIndexStore(e.target.value) }>
        {
          countries.map((item, index) => {
            return <option value={index}  > {item.name}</option>
          })
        }
      </select>

      <select >
        {
          countries[indexStore].cities.map((item) =>{
            return <option>{item}</option>
          })
        }
      </select>
    </>
  )
}

export default App