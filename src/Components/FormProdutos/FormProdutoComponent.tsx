import { Form } from "./Form-Style";
import { useEffect, useState } from "react";
import { Subtitle } from "../Subtitle";

export const FormProdutoComponent = () => {
  const [produto, setProduto] = useState({
    nome: "",
    valor: 0.0,
    quantidade: 0,
    estoque: 0,
  });
  const [nomeProduto, setNomeProduto] = useState<string>("");
  const [valorProduto, setValorProduto] = useState<number>(0.0);
  const [quantProduto, setQuantProduto] = useState<number>(0);
  const [estoqueProduto, setEstoqueProduto] = useState<number>(0);
 
 

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNomeProduto(e.target.value);
    };

    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValorProduto(Number(e.target.value));
    };
    const handleStock = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEstoqueProduto(Number(e.target.value));
    };

    const handleQuant = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuantProduto(Number(e.target.value));
    }

   const setarProduto = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduto = {
      nome: nomeProduto,
      valor: valorProduto,
      quantidade: quantProduto,
      estoque: estoqueProduto,
    };
    setProduto(newProduto);
    alert("Produto cadastrado com sucesso!");
  };
 
   
    //TODO: implementar a função de cadastro de Produto na api;
  useEffect(() => {
    console.log(produto);
  }, [produto]);

  return (
    <Form
      onSubmit={(e) => {
        setarProduto(e);
      }}
    >
      <Subtitle text="Produto" />
      <input
        type="text"
        required
        value={nomeProduto}
        key="nomeProduto"
        placeholder="nome do Produto"
        onChange={(e) => {handleName(e)}}
      ></input>
      <Subtitle text="Valor" />
      <input
        type="number"
        step="0.01"
        required
        value={valorProduto}
        key="endProduto"
        placeholder="valor do Produto"
        onChange={(e) => {handleValue(e)}}
      ></input>
      <Subtitle text="Quantidade" />
      <input
        type="number"
        required
        value={quantProduto}
        key="telProduto"
        placeholder="telefone do Produto"
        onChange={(e) => {handleQuant(e)}}
      ></input>
      <Subtitle text="estoque" />
      <input
        type="number"
        required
        value={estoqueProduto}
        key="cpfProduto"
        placeholder="cpf do Produto"
        onChange={(e) => {handleStock(e)}}
      ></input>
      <button type="submit">Cadastrar</button>
    </Form>
  );
};
