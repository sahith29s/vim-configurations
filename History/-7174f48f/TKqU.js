import { Modal } from 'bootstrap';
import './App.css';
import { useState } from 'react';



function App() {
  const [modal, setModal] = useState(false)
  return (
    <> 
      <div>
        <Modal/>
        <button>Modal</button>
      </div>
    </>
  );
}

export default App;

