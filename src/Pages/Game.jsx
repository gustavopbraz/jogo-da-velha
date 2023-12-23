import { useState, useEffect } from 'react'

import Tictactoe from '../components/rafael_gusta/Tictactoe'
import Button from '../components/rafael_gusta/Button'
import StyledMain from '../components/rafael_gusta/Main'
import StyledTitle from '../components/rafael_gusta/StyledTitle'
import CardWinner from '../components/rafael_gusta/CardWinner'
import CardEmpate from '../components/rafael_gusta/CardEmpate'
import BackButton from '../components/rafael_gusta/BackButton'
import Points from '../components/rafael_gusta/Points'
import CenterSection from '../components/rafael_gusta/CenterSection'

import { useNavigate } from 'react-router-dom';

function Game() {
  const navigate = useNavigate();
  const [matriz, setMatriz] = useState([['','',''],['','',''],['','','']]);
  localStorage.setItem('matriz@game', JSON.stringify(matriz));
  const [currentPlayer, setCurrentPlayer] = useState(false);
  const [empate, setEmpate] = useState(false);
  const [quantidadeJogadas, setQuantidadeJogadas] = useState(0);
  const [winner, setWinner] = useState('');
  const [pointsX, setPointsX] = useState(0);
  const [pointsO, setPointsO] = useState(0);

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

  const playAgain = () => {
    setMatriz([['','',''],['','',''],['','','']]);
    setQuantidadeJogadas(0);
    setEmpate(false);
    setCurrentPlayer(winner === 'X' ? true : false);
  }

  const backToMenu = () => {
    localStorage.removeItem('matriz@game');
    return navigate('/');
  }

  const resetGame = () => {
    setMatriz([['','',''],['','',''],['','','']]);
    setQuantidadeJogadas(0);
    if(winner === ''){
      setPointsO(0);
      setPointsX(0);
    }
    setWinner('');
    setCurrentPlayer(false);
    setEmpate(false);
  }

  useEffect(() => {
    setQuantidadeJogadas(quantidadeJogadas + 1);
    if(checkWinner()){
      if(currentPlayer){
        setPointsX(pointsX + 1);
      }else{
        setPointsO(pointsO + 1);
      }
      setWinner(currentPlayer ? 'X' : 'O');
    }
    else if(quantidadeJogadas === 9){
      setQuantidadeJogadas(0);
      setEmpate(true);
    }else{
      setCurrentPlayer(!currentPlayer);
    }


  }, [matriz]);

  return (
    <div>
      <StyledMain>
        <BackButton label="back" handler={backToMenu} color={"#10403B"} />
        <StyledTitle>Tic Tac Toe</StyledTitle>
        <CenterSection>
          <Points nickname="X" points={pointsX} />
          <Tictactoe matriz={matriz} setMatriz={setMatriz} player={currentPlayer}/>
          <Points nickname="O" points={pointsO} />
        </CenterSection>
        <Button label="reset" handler={resetGame} color={"#10403B"}/>
        {empate && <CardEmpate backFunc={backToMenu} playAgainFunc={playAgain}/>}
        {winner && <CardWinner winner={winner} backFunc={backToMenu} playAgainFunc={resetGame}/> /*arrumar funcoes de back e play again*/}
      </StyledMain>
    </div>
   )
}

export default Game;
