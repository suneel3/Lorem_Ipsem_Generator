
import { useState } from "react";
import "./App.css"

import Lorem from "./Lorem.jsx"


function App(){

  const [number,setNumber] = useState(0);

  return (
    <>
     <Lorem number={number} setNumber={setNumber}/>
    </>
  )
}

export default App;