import Cabecalho from "@/components/Cabecalho";
import Produto from "@/components/Produto";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [listaProduto, setListaProduto] = useState([]);
  const [listaProdutoFiltrado, setListaProdutoFiltrado] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7282/api/Produto").then((res) => {
      setListaProduto(res.data);
      setListaProdutoFiltrado(res.data);
      console.log(res, listaProduto);
    });
  }, []);

  function handlePesquisar(filtro){
    const valorFiltro = filtro.target.value

    const filtrado = listaProduto.filter((dado) => 
    dado.nome.toLowerCase().includes(valorFiltro.toLowerCase()))
    
    setListaProdutoFiltrado(filtrado)
    console.log(filtro)
  }

  return (
    <>
      <Cabecalho pesquisar={handlePesquisar}/>
      <div className="container-fluid mt-2 fundo">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {listaProdutoFiltrado.map((dado, index) => (
            <Produto
              key={index}
              nome={dado.nome}
              descricao={dado.descricao}
              novidade={dado.novidade}
              disponivel={dado.disponivel}
              preco={dado.preco}
              imagem={dado.imagem}
            
            />
          ))}
        </div>
      </div>
    </>
  );
}

