
function App() {


  const submitForm = async (e) =>{
    e.preventDefault()
    console.log("sahith");
  };
  return (
    <>
      <div className="container">

        <h1>Register</h1>

        <form onSubmit={submitForm}>

          <div>
            <input type="text" placeholder="Enter your Name " />
          </div>

          
          <div>
            <input type="text" placeholder="Enter your Emanil" />
          </div>

          <div>
            <input type="text" placeholder="Enter your Password" />
          </div>


        <div>
          <input type="submit" value="Submit this" />
        </div>
        </form>
      </div>


    </>
  );
}

export default App;
