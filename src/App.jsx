import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar";


function App() {
/*   const [count, setCount] = useState(0) */

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
{/*           <Route path="/" element={<AllPlayers />} />
          <Route path="/addPlayer" element={<AddPlayerForm />} />
          <Route path="players/:playerId" element={<SinglePlayer />} /> */}
          <Route path="/posts" element={<h1>posts</h1>} />
          <Route path="/profile" element={<h1>profile is here</h1>} />
          <Route path="/login" element={<h1>login should be here</h1>} />
          <Route path="/register" element={<h1>here is reg form</h1>} />
        </Routes>
      </main>
    </>
  );  
}

export default App
