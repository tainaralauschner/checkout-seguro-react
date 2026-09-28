export function limparNumeroCartao(numeroCartao) {
  return numeroCartao.replace(/[\s-]/g, "");
}

export function cartaoTemTodosDigitosIguais(numeroCartao) {
  const numeroLimpo = limparNumeroCartao(numeroCartao);

  if (numeroLimpo.length !== 16) {
    return false;
  }

  const primeiroDigito = numeroLimpo[0];

  return numeroLimpo.split("").every((digito) => digito === primeiroDigito);
}

export function simularPagamento(numeroCartao) {
  const tentativaDeGolpe = cartaoTemTodosDigitosIguais(numeroCartao);

  return {
    aprovado: !tentativaDeGolpe,
    motivo: tentativaDeGolpe ? "tentativa de golpe" : null,
  };
}