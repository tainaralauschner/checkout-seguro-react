import { Link } from "react-router-dom";

function Carrinho() {
  return (
    <section className="pagina">
      <h2>Carrinho de compras</h2>

      <p>Confira os produtos do carrinho antes de seguir para o pagamento.</p>

      <div className="card">
        <p>Os produtos e valores serão adicionados na próxima etapa.</p>
      </div>

      <Link className="botao" to="/pagamento">
        Finalizar compra
      </Link>
    </section>
  );
}

export default Carrinho;