import { FormClientesComponent } from "../Components/FormClientes/formPedidoComponent";
import { FormContainer } from "../Components/FormContainer/FormContainer-Style";
import { Title } from "../Components/Title";
import { PageContainer } from "../Components/PageContainer";
export const Clientes = () => {
    
    return(
        <PageContainer>
            <Title Titulo={"Cadastrar Cliente"}  />
            <FormContainer>
                <FormClientesComponent/>
            </FormContainer>
        </PageContainer>
    );
}