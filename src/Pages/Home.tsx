
import styled from 'styled-components';
import { Navbar } from '../Components/Navbar';
export const Homepage = () => {

    return(
            <Container>
                    <Navbar></Navbar>
                    <h1> Home Page</h1>
            </Container>

    );

}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`