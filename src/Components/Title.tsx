import styled from 'styled-components';
import React from 'react';
interface TitleProps {
    Titulo: string;
}
export const Title:React.FC<TitleProps> = (TitleProps) => {
    return(
    
       <H1>{TitleProps.Titulo}</H1>
       
    );

};

const H1 = styled.h1`
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    color: black;
    align-items: center;
    justify-content: center;
    `