import {FormProdutoComponent } from '../Components/FormProdutos/FormProdutoComponent';
import { FormContainer } from "../Components/FormContainer/FormContainer-Style";
import { Title } from "../Components/Title";
import  { Navbar } from "../Components/Navbar";
import { PageContainer } from "../Components/PageContainer";
export const Produtos = () => {
    
    return(
        <PageContainer>
             <Navbar></Navbar>
            <Title Titulo={"Cadastrar Produto"}  />
            <FormContainer>
                <FormProdutoComponent/>
            </FormContainer>
        </PageContainer>
    );
}