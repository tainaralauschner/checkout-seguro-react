import { Link } from "react-router-dom";

function ResumoCompra({ quantidadeItens, total, formatarMoeda, mostrarBotao }) {
  return (
    <aside className="resumo-compra" aria-label="Resumo da compra">
      <h3>Resumo da compra</h3>

      <p>
        Total de itens: <strong>{quantidadeItens}</strong>
      </p>

      <p className="resumo-compra__total">
        Total: <strong>{formatarMoeda(total)}</strong>
      </p>

      {mostrarBotao && (
        <Link className="botao" to="/pagamento">
          Finalizar compra
        </Link>
      )}
    </aside>
  );
}

export default ResumoCompra;