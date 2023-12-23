import Reaact from 'react';
import styled from 'styled-components';

const StyledPoints = styled.div`
    font-family: 'Poppins', sans-serif;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1 {
        font-weight: 500;
        color: white;
        font-size: 20px;
        color: #10403B;
    }
    h2 {
        font-weight: 400;
        color: white;
        font-size: 18px;
        color: #10403B;
    }
`;


const Points = ({nickname, points}) => {
    //dois textos com nome e pontos
    return(
        <StyledPoints>
            <h1>Player {nickname}</h1>
            <h2>Points: {points}</h2>
        </StyledPoints>

    );
}

export default Points;