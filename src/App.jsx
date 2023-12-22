import { useState, useEffect } from 'react'
import Placar from './components/brunna/Placar'
import Tictactoe from './components/rafael_gusta/Tictactoe'
import Button from './components/rafael_gusta/Button'
import StyledMain from './components/rafael_gusta/Main'
import StyledTitle from './components/rafael_gusta/StyledTitle'

function App() {
  const [matriz, setMatriz] = useState([['','',''],['','',''],['','','']]);
  localStorage.setItem('matriz@game', JSON.stringify(matriz));

  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [quantidadeJogadas, setQuantidadeJogadas] = useState(0);
  const [reiniciar, setReiniciar] = useState(false);

  const checkWinner = () => {
    const player = currentPlayer ? 'X' : 'O';
    //horizontal
    for(let i = 0; i < 3; i++){
      if(matriz[0][i] === player && matriz[1][i] === player && matriz[2][i] === player){
        return true;
      }
    }
    //vertical
    for(let i = 0; i < 3; i++){
      if(matriz[i][0] === player && matriz[i][1] === player && matriz[i][2] === player){
        return true;
      }
    }
    //diagonal
    if(matriz[0][0] === player && matriz[1][1] === player && matriz[2][2] === player){
      return true;
    }
    if(matriz[0][2] === player && matriz[1][1] === player && matriz[2][0] === player){
      return true;
    }
  }

  const resetGame = () => {
    setMatriz([['','',''],['','',''],['','','']]);
    setQuantidadeJogadas(0);
  }

  useEffect(() => {
    setQuantidadeJogadas(quantidadeJogadas + 1);
    console.log(quantidadeJogadas);
    if(checkWinner()){
      console.log('winner');
    }
    else if(quantidadeJogadas === 9){
      setQuantidadeJogadas(0);
      if(reiniciar)
      console.log('empate');
    }


    setCurrentPlayer(!currentPlayer);
  }, [matriz]);

  return (
      //<Placar />
    <div>
      <StyledMain>
        <StyledTitle>Jogo da Velha</StyledTitle>
        <Tictactoe matriz={matriz} setMatriz={setMatriz} player={currentPlayer}/>
        <Button label="reset" handler={resetGame}/>
      </StyledMain>
    </div>
   )
}

export default App
