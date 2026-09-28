import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ResumoCompra from "../components/ResumoCompra.jsx";
import { produtos } from "../data/produtos.js";
import usePagamento from "../hooks/usePagamento.js";
import { limparNumeroCartao } from "../utils/pagamento.js";

const pagamentoSchema = z.object({
  titular: z.string().min(1, "Informe o nome do titular."),
  numeroCartao: z
    .string()
    .min(1, "Informe o número do cartão.")
    .refine((valor) => limparNumeroCartao(valor).length === 16, {
      message: "O cartão deve ter 16 dígitos.",
    }),
  validade: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Informe a validade no formato MM/AA."),
  cvv: z.string().regex(/^\d{3}$/, "O CVV deve ter 3 dígitos."),
});

function Pagamento() {
  const navigate = useNavigate();
  const { processando, processarPagamento } = usePagamento();

  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.precoUnitario * produto.quantidade;
  }, 0);

  const quantidadeItens = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.quantidade;
  }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  function formatarMoeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  async function enviarPagamento(dados) {
    const resultado = await processarPagamento(dados);

    if (!resultado) {
      return;
    }

    if (resultado.aprovado) {
      navigate("/sucesso");
      return;
    }

    navigate("/falha");
  }

  return (
    <section className="pagina">
      <div className="pagina__cabecalho">
        <h2>Pagamento</h2>
        <p>Preencha os dados fictícios do cartão para simular a compra.</p>
      </div>

      <div className="layout-pagamento">
        <form
          className="formulario-pagamento"
          onSubmit={handleSubmit(enviarPagamento)}
        >
          <div className="campo-formulario">
            <label htmlFor="titular">Titular do cartão</label>
            <input
              id="titular"
              type="text"
              placeholder="Ex.: Tainara Lauschner"
              disabled={processando}
              {...register("titular")}
            />
            {errors.titular && (
              <p className="mensagem-erro">{errors.titular.message}</p>
            )}
          </div>

          <div className="campo-formulario">
            <label htmlFor="numeroCartao">Número do cartão</label>
            <input
              id="numeroCartao"
              type="text"
              inputMode="numeric"
              placeholder="Ex.: 1234 5678 9012 3456"
              disabled={processando}
              {...register("numeroCartao")}
            />
            {errors.numeroCartao && (
              <p className="mensagem-erro">{errors.numeroCartao.message}</p>
            )}
          </div>

          <div className="grupo-campos">
            <div className="campo-formulario">
              <label htmlFor="validade">Validade</label>
              <input
                id="validade"
                type="text"
                placeholder="MM/AA"
                disabled={processando}
                {...register("validade")}
              />
              {errors.validade && (
                <p className="mensagem-erro">{errors.validade.message}</p>
              )}
            </div>

            <div className="campo-formulario">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                inputMode="numeric"
                placeholder="123"
                disabled={processando}
                {...register("cvv")}
              />
              {errors.cvv && (
                <p className="mensagem-erro">{errors.cvv.message}</p>
              )}
            </div>
          </div>

          {processando && (
            <p className="mensagem-processando" aria-live="polite">
              Processando compra…
            </p>
          )}

          <button className="botao" type="submit" disabled={processando}>
            {processando ? "Processando..." : "Pagar agora"}
          </button>

          <Link className="link-secundario" to="/">
            Voltar ao carrinho
          </Link>
        </form>

        <ResumoCompra
          quantidadeItens={quantidadeItens}
          total={total}
          formatarMoeda={formatarMoeda}
          mostrarBotao={false}
        />
      </div>
    </section>
  );
}

export default Pagamento;