import { FormPedidoComponent } from "../Components/FormPedidos/formPedidoComponent";
import { FormContainer } from "../Components/FormContainer/FormContainer-Style";
import { Title } from "../Components/Title";
import { PageContainer } from "../Components/PageContainer";
export const Pedidos = () => {
    
    return(
        <PageContainer>
            <Title Titulo={"Lançar Novo Pedido"}  />
            <FormContainer>
                <FormPedidoComponent/>
            </FormContainer>
        </PageContainer>
    );
}