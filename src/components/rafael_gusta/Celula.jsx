import { React } from 'react';
import { styled } from 'styled-components';

const StyledCelula = styled.div`
    width: 100px;
    height: 100px;
    background-color: #10403B;
    cursor:pointer;
    margin-top:20px;
    font-family: 'Poppins', sans-serif;
    color:white;
    font-size: 90px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;

    &:hover{
        transform: translateY(-3px);
        background-color: #0C2D2A;
    }
`;

const StyledCelulaInactive = styled(StyledCelula)`
    cursor: default;
    &:hover{
        transform: translateY(0px);
        background-color: #10403B;
    }
`;

function Celula({setMatriz, player, i, j}) {
    const matriz = JSON.parse(localStorage.getItem('matriz@game'));
    
    const updateMatriz = () => {
        matriz[i][j] = player ? 'X' : 'O';
        setMatriz(matriz);
    }
    const active = matriz[i][j] === '' ? true : false;

    return(
        active
            ? <StyledCelula onClick={updateMatriz}></StyledCelula>
            : <StyledCelulaInactive>{matriz[i][j]}</StyledCelulaInactive>
    );
}

export default Celula;