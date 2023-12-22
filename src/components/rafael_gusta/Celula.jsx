import { React } from 'react';
import { styled } from 'styled-components';

const StyledCelula = styled.div`
    width: 150px;
    height: 150px;
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
`;

function Celula({setMatriz, player, i, j}) {
    const matriz = JSON.parse(localStorage.getItem('matriz@game'));
    
    const updateMatriz = () => {
        matriz[i][j] = player ? 'X' : 'O';
        setMatriz(matriz);
    }


    return(
        <StyledCelula onClick={updateMatriz}>{matriz[i][j]}</StyledCelula>
    );
}

export default Celula;