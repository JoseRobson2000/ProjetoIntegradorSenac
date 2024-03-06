import Cabecalho from "@/components/Cabecalho";
import CustomCheckboxLabel from "@/components/CustomCheckboxLabel";
import CustomInputLabel from "@/components/CustomInputLabel";
import CustomTextAreaLabel from "@/components/CustomTextAreaLabel";
import axios from "axios";
import { useState } from "react";

export default function cadastro() {

  const [dadosProduto, setDadosProduto] = useState({
                                                      id : 0,
                                                      nome : "",
                                                      descricao : "",
                                                      preco: 0,
                                                      novidade: false,
                                                      disponivel: false
                                                    })

  function handleSalvar()
  {
    //Enviaremos o post para a API
    axios.post("https://localhost:7282/api/Produto", dadosProduto)
        .then(res => console.log(res))
  }

  function handleChange(e){
    console.log(e.target)
    //console.log(e.target.id)

    if (e.target.type == "checkbox")
    {
      dadosProduto[e.target.id] = e.target.checked
    } else {
      dadosProduto[e.target.id] = e.target.value
    }
    
    setDadosProduto(dadosProduto)

    console.log(dadosProduto)    
  }

  return (
    <>
      <Cabecalho />
      <div className="container-fluid">
        <div className="row">
            <CustomInputLabel id="nome" onChange={handleChange} texto="Nome" col="8" />
            <CustomInputLabel id="preco" onChange={handleChange} texto="Preço" col="4" />
            <CustomTextAreaLabel id="descricao" onChange={handleChange} texto="Descrição" col="12" />
            <CustomInputLabel id="imagem" onChange={handleChange} texto="URL da Imagem" col="12" />
            <CustomCheckboxLabel id="disponivel" onChange={handleChange} texto="Disponível" col="6" />
            <CustomCheckboxLabel id="novidade" onChange={handleChange} texto="Novidade" col="6" />
        </div>
        <div className="row">
            <div className="col-12 text-center">
                <button className="btn btn-primary" onClick={handleSalvar}>Salvar</button>
            </div>
        </div>
      </div>
    </>
  );
}