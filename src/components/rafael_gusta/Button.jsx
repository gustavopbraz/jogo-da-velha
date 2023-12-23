import { React } from 'react'
import { styled } from 'styled-components'
const StyledButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 25px;
    border:none;
    color: ${props => props.color};
    background-color: transparent;
    transition: transform 0.3s ease-in-out;

    &:hover{
        cursor: pointer;
        transform: translateY(-3px);
    }
`;


const Button = ({label, handler, color}) => {
    return (
        <StyledButton color={color} onClick={handler}>{label}</StyledButton>
    );
}


export default Button;