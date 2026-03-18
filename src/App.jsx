import { useState } from "react"
import Background from "./Components/Background/Background"
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  let heroData = [
    {text1:"Dive Into",text2:"What you love"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give In To",text2:"Your Passions"}
  ]
  const[heroCount,setHeroCount] = useState(2);
  const[playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <NavBar/>
    </div>
  )
}

export default App
