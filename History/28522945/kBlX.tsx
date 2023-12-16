import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { MyContext } from './contextApi/myContext.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <MyContext.Provider value={{text , setText}}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MyContext.Provider >
  </BrowserRouter >
)
