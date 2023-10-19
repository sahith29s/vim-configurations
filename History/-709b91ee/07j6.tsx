import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

const styled = {
  width: "2.5rem",
  height: "2.5rem",
}

function App() {
  return (
    <>

      <nav className="flex justify-between mx-20">
        <div className="flex items-center gap-4">
          <MenuIcon style={styled} />
          <GitHubIcon style={styled} />
          <h4>Dashboard</h4>
        </div>

        <div className="">
          {/* input field and  */}
          <div className="hidden sm:block" >
            <div className="absolute z-10">
              <SearchIcon />
            </div>

            <input type="text" className="relative bg-black h-10 border-slate-200 border-2 rounded-[1rem] w-[20rem]" />

            <div className="absolute right-20 top-[-0.3rem]">
              <SearchIcon />
            </div>
          </div>
          <div className="">
          </div>
        </div>

        {/* mobile */}
      </nav>

      <div className="fixed top-0 bg-blue-200 w-[80vw]">
        <GitHubIcon style={styled} />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default App
