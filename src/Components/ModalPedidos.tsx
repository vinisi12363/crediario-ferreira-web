import styled from 'styled-components';
export interface ObjetoPedido {
    produto: {
        item:string,
         valor:number
    },
    nome:string,
    data:string,
}

export const ModalPedidos:React.FC<ObjetoPedido> = (props) => {
    console.log('dados dentro do modal',props.produto.item,props.produto.valor,props.data,props.nome);
    return(
        <Modal> 
                <p className="resumo">Resumo</p>
             <p>cliente: {props.nome}</p>
             <p> produto:  {props.produto.item} </p> 
             <p>Valor: R${props.produto.valor},00</p>
       
           
        </Modal>

    );
}

const Modal = styled.div `
    z-index: 1;
    position: absolute;
    top: 74%;
    left: 35%;
    
    width: 60%;
    max-height: 25%;
    border: 4px solid #000;
    border-radius: 12px;
    background-color: #D3D3D3;
    p{
     
        text-align: center;
        color: black;
        line-height: 0.6rem;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    .resumo{
        font-size: 1.5rem;
        text-decoration: underline;
        font-style: italic;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }   
`;