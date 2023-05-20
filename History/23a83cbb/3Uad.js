import './App.css';
import Index from './components';

function App() {
    let playing = false
  return (
    <>
    
    <Index title={
      ()=>{
        
        console.log(playing ? "pause" : "playing");
        playing = !playing
      }
    }/>
    </>
  );
}

export default App;
