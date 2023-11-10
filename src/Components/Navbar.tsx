
import styled from "styled-components";

export const Navbar = ()=>{
    return(
        <Nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/pedidos">Pedidos</a></li>
                <li><a href="/clientes">Clientes</a></li>
                <li><a href="/produtos">Produtos</a></li>
            </ul>
        </Nav>
    )

}

const Nav = styled.nav`
    background-color: #ebebebe;
    position: fixed;
    top:0px;
    left:0px;
`