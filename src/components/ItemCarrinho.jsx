function ItemCarrinho({ produto, formatarMoeda }) {
  const subtotal = produto.precoUnitario * produto.quantidade;

  return (
    <article className="item-carrinho">
      <div>
        <h3>{produto.nome}</h3>
        <p>Quantidade: {produto.quantidade}</p>
      </div>

      <div className="item-carrinho__valores">
        <p>Preço unitário: {formatarMoeda(produto.precoUnitario)}</p>
        <p>
          <strong>Subtotal: {formatarMoeda(subtotal)}</strong>
        </p>
      </div>
    </article>
  );
}

export default ItemCarrinho;