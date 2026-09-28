import { Link } from "react-router-dom";

function Falha() {
  return (
    <section className="pagina">
      <h2>Tentativa de golpe</h2>

      <p>
        A compra fictícia foi recusada porque o cartão informado possui todos
        os dígitos iguais.
      </p>

      <Link className="botao" to="/pagamento">
        Tentar novamente
      </Link>
    </section>
  );
}

export default Falha;