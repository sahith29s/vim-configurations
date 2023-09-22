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

// import React, { useState } from 'react'

// const countries = [
//   {
//     name: "india", cities: ["delhi", "hyderabd"]
//   },
//   {
//     name: "pakisthan", cities: ["ladakh", "karachi"]
//   }
// ]
// const App = () => {

//   const [indexStore , setIndexStore] = useState(0)
//   const [country, setCountry] = useState(countries)

//   return (
//     <>
//       <select onChange={(e) => setIndexStore(e.target.value) }>
//         {
//           countries.map((item, index) => {
//             return <option value={index}  > {item.name}</option>
//           })
//         }
//       </select>

//       <select >
//         {
//           countries[indexStore].cities.map((item) =>{
//             return <option>{item}</option>
//           })
//         }
//       </select>
//     </>
//   )
// }

// export default App

// import React from 'react'

// const options = ["cricket", "football", "hockey"];
// const days = ["weekdays", "fuckday"];

// const App = () => {
//   return (
//     <>
//       {options.map((item) => {

//         return (
//           <>
//             <input type="radio" name='size' id={item} />
//             <label htmlFor={item}>{item}</label>
//           </>
//         )

//       })}

//       <br />
//       {
//         days.map((item) => {
//           return (
//             <>
//               <input type="radio" name="sahith" id={item} />
//               <label htmlFor={item}>{item}</label>
//             </>

//           )
//         })
//       }

//     </>
//   )
// }

// export default App

// import React, { useState } from 'react';
// import { TreeView, TreeItem } from '@mui/lab';
// import { makeStyles } from '@mui/styles';
// import FolderIcon from '@mui/icons-material/Folder';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

// const FileExplorer = ({ data }) => {
//   const classes = useStyles();
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleSelect = (_, value) => {
//     setSelectedItem(value);
//   };

//   const renderTree = (items) => (
//     <TreeItem key={items.name} nodeId={items.name} label={items.name} icon={items.type === 'folder' ? <FolderIcon /> : <InsertDriveFileIcon />}>
//       {Array.isArray(items.children) ? items.children.map((item) => renderTree(item)) : null}
//     </TreeItem>
//   );

//   return (
//     <div className={classes.root}>
//       <h1>File Explorer</h1>
//       <TreeView
//         defaultCollapseIcon={<FolderIcon />}
//         defaultExpandIcon={<FolderIcon />}
//         selected={selectedItem}
//         onNodeSelect={handleSelect}
//       >
//         {renderTree(data)}
//       </TreeView>
//       {selectedItem && selectedItem.type === 'file' && (
//         <p>You selected a file: {selectedItem.name}</p>
//       )}
//     </div>
//   );
// };
// export default FileExplorer;

