import React, {useState} from 'react';

//Requisito dos Dois jogadores
const jogodavelha = () => {
    const [jogadora, setjogadoratual] = useState('JogadorA'); //inicialição com 'Jogador' que será o nosso jogador incicial

    //esta funçao é pra quando uma célula do tabuleiro for clicada e para atualizar o estado do jogador

    const cliquecelula = (linha, coluna) => {

        setjogadoratual(jogadoratual == 'JogadorA' ? 'JogadorB' : 'JogadorA');
        //verifica se jogador atual é 'JogadorA', se for muda para jogadorB, caso n vira jogadorA. (Alternancia requisito 4 )
    };  

    const escolherjogador = (jogadorEscolhido) => {
        setjogadoratual(jogadorEscolhido); //atualiza o estado do jogadoratual
    }

return (
    <div className="VezDosJogadores">
        <p>Sua vez: {jogadoratual}</p>
        <button>onClick={() => escolherjogador(jogadorA)}JogadorA:</button>
        <button>onClick={() => escolherjogador(jogadorB)}JogadorB:</button>
    </div>

)
};

export default jogodavelhaGD
