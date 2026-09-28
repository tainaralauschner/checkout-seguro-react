import { Link } from "react-router-dom";

function Sucesso() {
  return (
    <section className="pagina">
      <h2>Compra aprovada</h2>

      <p>Sua compra fictícia foi aprovada com sucesso.</p>

      <Link className="botao" to="/">
        Voltar ao carrinho
      </Link>
    </section>
  );
}

export default Sucesso;