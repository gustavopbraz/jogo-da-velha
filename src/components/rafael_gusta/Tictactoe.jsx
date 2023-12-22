import { React } from 'react'
import { useState } from "react"
import { styled } from 'styled-components'
import Celula from './Celula'

const StyledGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 190px);
    grid-template-columns: repeat(3, 150px);
    grid-gap: 20px;
`;

const StyledTictactoe = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;



const Tictactoe = ( { matriz, setMatriz, player} ) => {
    return (
        <StyledTictactoe>
            <StyledGrid>
                {matriz.map((linha, i) => (
                    <div key={i}>
                        {linha.map((celula, j) => (
                            <Celula key={j} setMatriz={setMatriz} player={player} i={i} j={j} />
                            ))}
                    </div>
                ))}
            </StyledGrid>
            </StyledTictactoe>
    );
}

export default Tictactoe;