import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import StyledTitle from './StyledTitle';

const StyledCardWinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(36 106 99 / 0.9);
    backdrop-filter: blur(5px);
    width: 700px;
    height: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled(StyledTitle)`
    color: #FFFFFF;
    font-weight: 400;
    font-size: 35px;
`;

const ButtonsSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 700px;
`;

const StyledButton = styled(Button)`
    background-color: transparent;
`;

const CardWinner = ({backFunc, playAgainFunc}) => {
    return(
        <StyledCardWinner>
            <Title>Empate!</Title>
            <ButtonsSide>
                <StyledButton label="back" color="white" handler={backFunc}/>
                <StyledButton label="play again" color="white" handler={playAgainFunc}/>
            </ButtonsSide>
        </StyledCardWinner>
    );
};

export default CardWinner;