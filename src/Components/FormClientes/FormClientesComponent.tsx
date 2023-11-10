import { Form } from "./Form-Style";
import { useEffect, useState } from "react";
import { Subtitle } from "../Subtitle";

export const FormClientesComponent = () => {
  const [cliente, setCliente] = useState({
    nome: "",
    endereço: "",
    telefone: "",
    cpf: "",
  });
  const [nomeCliente, setNomeCliente] = useState<string>("");
  const [endCliente, setEndCliente] = useState<string>("");
  const [telCliente, setTelCliente] = useState<string>("");
  const [cpfCliente, setCpfCliente] = useState<string>("");
 
 

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNomeCliente(e.target.value);
    };

    const handleEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndCliente(e.target.value);
    };
    const handleTel = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTelCliente(e.target.value);
    };

    const handleCpf = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCpfCliente(e.target.value);
    }

   const setarCliente = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCliente = {
      nome: nomeCliente,
      endereço: endCliente,
      telefone: telCliente,
      cpf: cpfCliente,
    };
    setCliente(newCliente);
    alert("Cliente cadastrado com sucesso!");
  };
 
   
    //TODO: implementar a função de cadastro de cliente na api;
  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  return (
    <Form
      onSubmit={(e) => {
        setarCliente(e);
      }}
    >
      <Subtitle text="Nome" />
      <input
        type="text"
        required
        value={nomeCliente}
        key="nomeCliente"
        placeholder="nome do cliente"
        onChange={(e) => {handleName(e)}}
      ></input>
      <Subtitle text="Endreço" />
      <input
        type="text"
        required
        value={endCliente}
        key="endCliente"
        placeholder="endereço do cliente"
        onChange={(e) => {handleEnd(e)}}
      ></input>
      <Subtitle text="Telefone" />
      <input
        type="text"
        required
        value={telCliente}
        key="telCliente"
        placeholder="telefone do cliente"
        onChange={(e) => {handleTel(e)}}
      ></input>
      <Subtitle text="CPF" />
      <input
        type="text"
        required
        value={cpfCliente}
        key="cpfCliente"
        placeholder="cpf do cliente"
        onChange={(e) => {handleCpf(e)}}
      ></input>
      <button type="submit">Cadastrar</button>
    </Form>
  );
};
