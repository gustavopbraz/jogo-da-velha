import { React } from 'react'
import { styled } from 'styled-components'
const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    border:none;
    color: #10403B;
    background-color: white;
`;


const Button = ({label, handler}) => {
    return (
        <StyledButton onClick={handler}>{label}</StyledButton>
    );
}


export default Button;