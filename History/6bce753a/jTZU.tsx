import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from "../src/redux/store/store.ts"
import { ChakraBaseProvider, ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
