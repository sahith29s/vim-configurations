import ReactDOM from 'react-dom/client'
import {store} from './store/store.js'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)



