import { Form } from "./Form-Style";
import {  useState, useEffect } from "react";
import { Subtitle } from "../Subtitle";
import React from "react";
import { ModalPedidos } from "../ModalPedidos";


export const FormPedidoComponent = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [selectedClient, setSelectedClient] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [newData, setNewData] = useState({
    prod: [{produto:"", valor:0}],
    nomeCliente:"",
    Data:""
  });
  

  const clientes = [
    "João",
    "Maria",
    "José",
    "Pedro",
    "Antônio",
    "Francisco",
    "Carlos",
    "Paulo",
  ];
  const produtos = [
    {produto:"panela de pressão", valor:100},
    {produto:"sofá", valor:110},
    {produto:"cadeira", valor:130},
    {produto:"mesa", valor:150},
    {produto:"cama", valor:170},
    {produto:"geladeira", valor:190},
    {produto:"fogão", valor:200},
    {produto:"microondas", valor:210},
    {produto:"liquidificador", valor:220},
    {produto:"notebook", valor:230},
    {produto:"smartphone", valor:240},

    ];
    useEffect(()=>{
       
        let p = [];
        if(selectedProduct.length > 0 && selectedClient.length > 0 && selectedDate.length > 0){
             p = produtos.filter((produto)=>produto.produto === selectedProduct);
              setNewData ({prod: p, nomeCliente: selectedClient, Data: selectedDate});
           
        }
    

    },[selectedProduct,selectedClient,selectedDate]);
  const handleProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value?.length > 0) {
      setSelectedProduct(e.target.value);
    }
  };
  const handleClient = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value?.length > 0) {
      setSelectedClient(e.target.value);
    }
  };
  
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value?.length > 0) {
      setSelectedDate(e.target.value);
    }
  };
        //TODO - implementar a função de parcelamento.
        //TODO - implementar a função de lançamento.
        //TODO -  fazer  o menu flutuante da navbar
  return (
    <Form
      onSubmit={() => {
        alert("lançado");
      }}
    >
      <Subtitle text={"Selecionar Cliente :"}></Subtitle>
      <select
        onChange={(e) => {
          handleClient(e);
        }}
      >
        {clientes.map((cliente) => (
          <option key={cliente} value={cliente}>
            {cliente}
          </option>
        ))}
      </select>

      <Subtitle text={"Selecionar data da Venda :"}></Subtitle>
      <input 
        type="date" 
        key="dataPgto" 
        onChange={
            (e)=>{
                handleDate(e);
            }
        }></input>
     
      <Subtitle text={"Buscar produto:"}></Subtitle>
      <select
        onChange={(e) => {
          handleProduct(e);
        }}
      >
        {produtos.map((p) => (
          <option key={p.produto} value={p.produto}>
            {p.produto}
          </option>
        ))}
      </select>
      <h2 
        onClick={() => {
          alert("clicado");
        }}
      >
        Parcelar
      </h2>
      {newData ?  <ModalPedidos nome={newData.nomeCliente} data= {newData.Data} produto={{item:newData.prod[0].produto, valor:newData.prod[0].valor}}></ModalPedidos>
       :<></>}
      <button type="submit">Lançar</button>
    </Form>
  );
};
