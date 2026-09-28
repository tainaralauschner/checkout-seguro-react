import { useState } from "react";
import { simularPagamento } from "../utils/pagamento.js";

function usePagamento() {
  const [processando, setProcessando] = useState(false);

  async function processarPagamento(dadosPagamento) {
    if (processando) {
      return null;
    }

    setProcessando(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });

    const resultado = simularPagamento(dadosPagamento.numeroCartao);

    setProcessando(false);

    return resultado;
  }

  return {
    processando,
    processarPagamento,
  };
}

export default usePagamento;