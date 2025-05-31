import { useState } from 'react'
import './App.css'
import Header from './Components/Header'

function App() {
  const [preferredMode, setPreferredMode] = useState<"light"| "dark">("light");


  return (
    <div className={`app ${preferredMode === "light" ? "light" : "dark"}`}>
      <Header preferredMode={preferredMode} setPreferredMode={setPreferredMode}/>
    </div>
  )
}

export default App
