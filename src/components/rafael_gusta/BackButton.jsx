import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledBackButton = styled.div`
    background-color: transparent;
    position: absolute;
    top: 20px;
    left: 20px;
`;
const BackButton = ({label, handler, color}) => {
    return (
        <StyledBackButton>
            <Button label={label} color={color} handler={handler}/>
        </StyledBackButton>
    );
};


export default BackButton;
