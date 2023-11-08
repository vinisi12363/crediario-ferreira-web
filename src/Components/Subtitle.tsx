import styled from 'styled-components';
import React from 'react';
interface SubtitleProps {
    text: string;
}
export const Subtitle:React.FC<SubtitleProps> = (SubtitleProps) => {
    return(
    
       <P>{SubtitleProps.text}</P>
       
    );

};

const P = styled.p`
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: white;
    align-items: center;
    justify-content: center;
    `