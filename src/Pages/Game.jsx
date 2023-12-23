import { useState, useEffect } from 'react'
import Placar from '../components/brunna/Placar'
import Tictactoe from '../components/rafael_gusta/Tictactoe'
import Button from '../components/rafael_gusta/Button'
import StyledMain from '../components/rafael_gusta/Main'
import StyledTitle from '../components/rafael_gusta/StyledTitle'
import CardWinner from '../components/rafael_gusta/CardWinner'
import CardEmpate from '../components/rafael_gusta/CardEmpate'
import BackButton from '../components/rafael_gusta/BackButton'
import './Game.css'
import { useNavigate } from 'react-router-dom';

function Game() {
  const navigate = useNavigate();
  const [matriz, setMatriz] = useState([['','',''],['','',''],['','','']]);
  localStorage.setItem('matriz@game', JSON.stringify(matriz));
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [empate, setEmpate] = useState(false);
  const [quantidadeJogadas, setQuantidadeJogadas] = useState(0);
  const [winner, setWinner] = useState('');
  const [countX, setCountX] = useState(0);
  const [countO, setCountO] = useState(0);

  const checkWinner = () => {
    const player = currentPlayer ? 'X' : 'O';
    //horizontal
    for(let i = 0; i < 3; i++){
      if(matriz[0][i] === player && matriz[1][i] === player && matriz[2][i] === player){
        console.log('ganhou na horizontal')
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

  const backToMenu = () => {
    localStorage.removeItem('matriz@game');
    return navigate('/');
  }

  const resetGame = () => {
    setMatriz([['','',''],['','',''],['','','']]);
    setQuantidadeJogadas(0);
    setWinner('');
    setCurrentPlayer(false);
    setEmpate(false);

  }

  useEffect(() => {
    setQuantidadeJogadas(quantidadeJogadas + 1);
    if(checkWinner()){
      console.log('alguém ganhou')
      /*
      (so entra nesta condicao quando alguem ganha)
      */
      /* currentPlayer = true se X ganhou
      currentPlayer = false se O ganhou */
      setWinner(currentPlayer ? 'X' : 'O');
      countWinner(currentPlayer);
    }
    else if(quantidadeJogadas === 9){
      setQuantidadeJogadas(0);
      setEmpate(true);
    }else{
      setCurrentPlayer(!currentPlayer);
    }

  }, [matriz]);

  const countWinner = (winner) => {
    
    if(winner) {
      setCountX(countX+1);
      console.log('x ganhou')
    } else {
      setCountO(countO+1);
      console.log('o ganhou')
    }

  }

  const resetarPlacar = () => {
    setCountO(0);
    setCountX(0);
  }

  return (
    <div>
      <StyledMain>
        <BackButton label="back" handler={backToMenu} color={"#10403B"} />
        <StyledTitle>Tic Tac Toe</StyledTitle>
        <div className='containerGamePlacar'>
          <Placar time='O' pontuacao={countO}/>
          <Tictactoe matriz={matriz} setMatriz={setMatriz} player={currentPlayer}/>
          <Placar time='X' pontuacao={countX}/>
        </div>
        <div className='containerButton'>
          <div className='myButton'>
            <Button label="reset" handler={resetGame} color={"#10403B"}/>
            {empate && <CardEmpate backFunc={backToMenu} playAgainFunc={resetGame}/>}
            {winner && <CardWinner winner={winner} backFunc={backToMenu} playAgainFunc={resetGame}/> /*arrumar funcoes de back e play again*/}
          </div>
          <div className='myButton'>
            <Button label="reset score" color={"#10403B"} handler={resetarPlacar}/>
          </div>
        </div>
        
        
      </StyledMain>
    </div>
   )
}

export default Game;
