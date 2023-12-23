import { useState, useEffect } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Game from './Pages/Game'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        {/*
          COLOCAR ROTA DA PAGINA INICAL
          
        
        */}
      </Routes>
    </BrowserRouter>
   )
}

export default App
