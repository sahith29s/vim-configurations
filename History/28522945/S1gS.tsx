import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import React, { createContext, useState } from "react"
const MyContext = createContext();
const MyProvider = ({chlidren}) => {
  const [data, setData] = useState("");
}

import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
)
