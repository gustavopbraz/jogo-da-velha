import "./JogodavelhaGD.css"
import React, {useState} from 'react';

//Requisito dos Dois jogadores
const JogodavelhaGD = () => {
    const [JogadorAtual] = useState('JogadorA'); //inicialição com 'Jogador' que será o nosso jogador incicial

    //esta funçao é pra quando uma célula do tabuleiro for clicada e para atualizar o estado do jogador

    const Cliquecelula = (linha, coluna) => {
        
       // SetJogadoratual(JogadorAtual == 'JogadorA' ? 'JogadorB' : 'JogadorA');

        //verifica se jogador atual é 'JogadorA', se for muda para jogadorB, caso n vira jogadorA. (Alternancia requisito 4 )
        //Parte comentada pois a funçao foi implementada no código do Rafael e do Gustavo
    };  

    const Escolherjogador = (JogadorEscolhido) => {
        SetJogadorAtual(JogadorEscolhido); //atualiza o estado do jogadoratual
    }

return (
    <div className="VezDosJogadores">
        <p>Sua vez: {JogadorAtual}</p>
        <button onClick={() => Escolherjogador('JogadorA')}>X</button>
        <button onClick={() => Escolherjogador('JogadorB')}>O</button>
    </div>

)
};

export default JogodavelhaGD
