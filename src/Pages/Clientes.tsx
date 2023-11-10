import { FormClientesComponent } from "../Components/FormClientes/FormClientesComponent";
import { FormContainer } from "../Components/FormContainer/FormContainer-Style";
import { Title } from "../Components/Title";
import { PageContainer } from "../Components/PageContainer";
import { Navbar } from "../Components/Navbar"; 
export const Clientes = () => {
    
    return(
        <PageContainer>
             <Navbar></Navbar>
            <Title Titulo={"Cadastrar Cliente"}  />
            <FormContainer>
                <FormClientesComponent/>
            </FormContainer>
        </PageContainer>
    );
}