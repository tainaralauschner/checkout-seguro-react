import { Link } from "react-router-dom";

function Pagamento() {
  return (
    <section className="pagina">
      <h2>Pagamento</h2>

      <p>
        Nesta tela será criado o formulário com React Hook Form e validação com
        Zod.
      </p>

      <div className="card">
        <p>Formulário de pagamento será implementado nas próximas etapas.</p>
      </div>

      <Link className="link-secundario" to="/">
        Voltar ao carrinho
      </Link>
    </section>
  );
}

export default Pagamento;