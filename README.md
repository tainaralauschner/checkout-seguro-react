# Checkout Seguro React

Mini-projeto avaliativo desenvolvido em React para simular o fluxo de checkout de uma loja virtual.

A aplicação possui carrinho fixo, formulário de pagamento com validação, simulação assíncrona de processamento e telas de sucesso ou falha conforme a regra definida para o cartão.

## Objetivo do projeto

O objetivo do projeto é construir uma SPA em React que simula um checkout simples, sem back-end e sem integração com gateway de pagamento real.

O fluxo principal da aplicação é:

1. Visualizar os produtos no carrinho;
2. Conferir subtotais e total da compra;
3. Preencher os dados fictícios do cartão;
4. Validar os campos do formulário;
5. Simular o processamento da compra;
6. Exibir tela de sucesso ou falha.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- JSX
- React Router DOM
- React Hook Form
- Zod
- CSS
- Git e GitHub
- Trello

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/tainaralauschner/checkout-seguro-react.git
```

Acesse a pasta do projeto:

```bash
cd checkout-seguro-react
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Depois, acesse no navegador o endereço indicado pelo terminal, geralmente:

```txt
http://localhost:5173/
```

## Estrutura de pastas

```txt
src
├── assets
│   └── styles
│       └── index.css
├── components
│   ├── ItemCarrinho.jsx
│   └── ResumoCompra.jsx
├── data
│   └── produtos.js
├── hooks
│   └── usePagamento.js
├── pages
│   ├── Carrinho.jsx
│   ├── Falha.jsx
│   ├── Pagamento.jsx
│   └── Sucesso.jsx
├── utils
│   └── pagamento.js
├── App.jsx
└── main.jsx
```

## Rotas da aplicação

| Rota | Tela | Descrição |
|---|---|---|
| `/` | Carrinho | Exibe os produtos, subtotais e total da compra |
| `/pagamento` | Pagamento | Exibe o formulário de pagamento fictício |
| `/sucesso` | Sucesso | Confirma a compra aprovada |
| `/falha` | Falha | Exibe a mensagem de tentativa de golpe |

## Funcionalidades implementadas

- Carrinho fixo com três produtos;
- Renderização dos produtos com `map`;
- Uso de `key` estável nos itens do carrinho;
- Cálculo de subtotal por produto;
- Cálculo do total da compra;
- Formatação dos valores em reais;
- Componente reutilizável `ItemCarrinho`;
- Componente reutilizável `ResumoCompra`;
- Formulário de pagamento com React Hook Form;
- Validação dos campos com Zod;
- Custom hook `usePagamento`;
- Simulação assíncrona com `Promise`, `setTimeout` e `async/await`;
- Exibição da mensagem `Processando compra…`;
- Bloqueio do botão durante o processamento;
- Navegação automática para sucesso ou falha;
- Máscara simples para número do cartão;
- Máscara simples para validade;
- Validação de cartão vencido;
- Layout responsivo;
- Ajustes básicos de acessibilidade.

## Validações do formulário

O formulário de pagamento valida os seguintes campos:

### Titular do cartão

O campo é obrigatório.

### Número do cartão

O campo deve conter 16 dígitos.

Espaços e hífens são desconsiderados para a validação.

Exemplos aceitos:

```txt
1234 5678 9012 3456
1234567890123456
2222-2222-2222-2222
```

### Validade

A validade deve estar no formato:

```txt
MM/AA
```

O mês deve estar entre `01` e `12`.

A aplicação também valida se o cartão está vencido. Caso a validade seja anterior ao mês e ano atuais, o formulário exibe mensagem de erro e impede o envio.

### CVV

O CVV deve conter 3 dígitos.

## Regra da tentativa de golpe

A simulação aprova qualquer cartão válido, exceto quando todos os 16 dígitos forem iguais.

Exemplos que levam para a tela de falha:

```txt
1111 1111 1111 1111
2222-2222-2222-2222
```

Nesses casos, a aplicação direciona o usuário para a rota `/falha` e exibe a mensagem:

```txt
tentativa de golpe
```

Exemplo de cartão aprovado:

```txt
1234 5678 9012 3456
```

Nesse caso, a aplicação direciona o usuário para a rota `/sucesso`.

## Branches utilizadas

Durante o desenvolvimento, foram utilizadas branches para organizar as etapas do projeto:

- `main`
- `develop`
- `feat/estrutura-rotas`
- `feat/carrinho`
- `feat/formulario-pagamento`
- `feat/regra-pagamento`
- `feat/estilos-responsividade`
- `docs/readme`
- `fix/validade-cartao-vencido`

## Organização no Trello

O projeto foi organizado em um quadro Kanban no Trello, com as seguintes listas:

- Backlog
- A fazer
- Em andamento
- Em revisão
- Concluído

Link do quadro:

```txt
https://trello.com/b/c4rE3i0B/checkout-seguro-react-mini-projeto-m2s07
```

## Uso de IA

A inteligência artificial foi utilizada como apoio para:

- Planejamento do projeto;
- Organização das tarefas no Trello;
- Estruturação das etapas de desenvolvimento;
- Revisão de código;
- Apoio na escrita do README;
- Apoio na conferência dos requisitos obrigatórios.

O código foi revisado, testado e adaptado ao escopo do projeto, mantendo a proposta de uma aplicação em React sem back-end, sem TypeScript e sem gateway de pagamento real.

## Debug e testes realizados

Durante o desenvolvimento, foram realizados testes manuais para verificar:

- Funcionamento das rotas;
- Exibição correta dos produtos no carrinho;
- Cálculo dos subtotais;
- Cálculo do total da compra;
- Validação dos campos obrigatórios;
- Validação do número do cartão;
- Validação da validade no formato `MM/AA`;
- Validação de cartão vencido;
- Validação do CVV;
- Processamento assíncrono;
- Bloqueio do botão durante o processamento;
- Direcionamento para `/sucesso`;
- Direcionamento para `/falha`;
- Exibição da mensagem `tentativa de golpe`;
- Responsividade no desktop e em tela menor.

## Melhorias futuras

Algumas melhorias que poderiam ser implementadas futuramente:

- Permitir alterar a quantidade dos produtos;
- Permitir remover produtos do carrinho;
- Criar uma página de catálogo;
- Adicionar animações simples nas transições;
- Publicar a aplicação no GitHub Pages;
- Melhorar a máscara visual dos campos do formulário.

## Vídeo de apresentação

```txt
https://drive.google.com/file/d/1uDj8gMSLVZdGuDRSeyGxaUDLeXyQJwFV/view?usp=sharing
```

## Autora

Desenvolvido por Tainara Lauschner.