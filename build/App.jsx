import Home from "./components/Home";
import HeaderLeft from "./components/HeaderLeft";
import { useState } from "react";

function App() {

  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkMode = () => {
    setDarkmode((prevMode) => !prevMode);

    document.documentElement.classList.toggle("dark", !darkmode)
  }
  return (
    <>
      <div className={`min-h-screen w-full flex flex-col sm:flex-row 
      subpixel-antialiased ${darkmode ? "bg-black" : "bg-white"}`}>
        <HeaderLeft darkmode={darkmode} toggleDarkMode=
        {toggleDarkMode}/>
        <Home />
      </div>
    </>
  );
}

export default App;
