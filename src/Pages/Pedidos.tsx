import { FormPedidoComponent } from "../Components/FormPedidos/FormPedidosComponent";
import { FormContainer } from "../Components/FormContainer/FormContainer-Style";
import { Title } from "../Components/Title";
import { Navbar } from "../Components/Navbar";
import { PageContainer } from "../Components/PageContainer";
export const Pedidos = () => {
    
    return(
        <PageContainer>
             <Navbar></Navbar>
            <Title Titulo={"Lançar Novo Pedido"}  />
            <FormContainer>
                <FormPedidoComponent/>
            </FormContainer>
        </PageContainer>
    );
}