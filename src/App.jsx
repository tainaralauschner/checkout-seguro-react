import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho.jsx";
import Pagamento from "./pages/Pagamento.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import Falha from "./pages/Falha.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="cabecalho">
          <div className="cabecalho__conteudo">
            <NavLink className="logo-texto" to="/">
              Checkout Seguro React
            </NavLink>

            <nav className="navegacao" aria-label="Navegação principal">
              <NavLink to="/">Carrinho</NavLink>
              <NavLink to="/pagamento">Pagamento</NavLink>
              <NavLink to="/sucesso">Sucesso</NavLink>
              <NavLink to="/falha">Falha</NavLink>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Carrinho />} />
            <Route path="/pagamento" element={<Pagamento />} />
            <Route path="/sucesso" element={<Sucesso />} />
            <Route path="/falha" element={<Falha />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;