import Modal from './components/Modal';
import './App.css';

import { useState } from 'react';



function App() {
  const [modal, setModal] = useState(false)
  return (
    <> 
      <div>
        <button>Modal</button>
        {/* <Modal/> */}
      </div>
    </>
  );
}

export default App;

