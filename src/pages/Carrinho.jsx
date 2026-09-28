import ItemCarrinho from "../components/ItemCarrinho.jsx";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";

function Carrinho() {
  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.precoUnitario * produto.quantidade;
  }, 0);

  const quantidadeItens = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade;
  }, 0);

  function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <section className="pagina">
      <div className="pagina__cabecalho">
        <h2>Carrinho de compras</h2>
        <p>Confira os produtos do carrinho antes de seguir para o pagamento.</p>
      </div>

      <div className="layout-carrinho">
        <div className="lista-carrinho" aria-label="Produtos no carrinho">
          {produtos.map((produto) => (
            <ItemCarrinho
              key={produto.id}
              produto={produto}
              formatarMoeda={formatarMoeda}
            />
          ))}
        </div>

        <ResumoCompra
          quantidadeItens={quantidadeItens}
          total={total}
          formatarMoeda={formatarMoeda}
          mostrarBotao
        />
      </div>
    </section>
  );
}

export default Carrinho;