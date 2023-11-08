import styled from 'styled-components'


export const Form = styled.form`

    background-color: ##434d53;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60dvh;
    height: 80dvh;
    padding: 15px;
    
    input {
            height: 40px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            border-radius: 12px;
            border: 1px solid #000;
    }
    p{
        color:#fff;
        fotn-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
    }
    select{   
        height: 40px;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            border-radius: 12px;
            border: 1px solid #000;     
    }
    button{
        font-family: 'Roboto', sans-serif;
        background-color: lightblue;
        border-radius: 12px;
        height: 40px;
        width:80px;
        border: 1px solid #000;
        position: relative;
        top: 8%;
        left: 36%;

    }

`

