import { useState, useEffect } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Placar from './components/brunna/Placar'
import Game from './Pages/Game'

function App() {
  return (
      //<Placar />
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Game />} />
        {/*
          COLOCAR ROTA DA PAGINA INICAL
          
        
        */}
      </Routes>
    </BrowserRouter>
   )
}

export default App
