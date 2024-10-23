const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

try {
    const clienteRoutes = require('./routes/clienteRoutes'); 
  console.log("clienteRoutes carregado");
  app.use("/clientes", clientesRoutes);
} catch (e) {
  console.error("Erro ao carregar clienteRoutes:", e);
}

try {
  const telefoneRoutes = require('./routes/telefoneRoutes');
  console.log("telefoneRoutes carregado");
  app.use("/telefones", telefoneRoutes);
} catch (e) {
  console.error("Erro ao carregar telefoneRoutes:", e);
}

try {
  const quartoRoutes = require('./routes/quartoRoutes');
  console.log("quartoRoutes carregado");
  app.use("/quartos", quartoRoutes);
} catch (e) {
  console.error("Erro ao carregar quartoRoutes:", e);
}

try {
  const reservaRoutes = require('./routes/reservaRoutes');
  console.log("reservaRoutes carregado");
  app.use("/reservas", reservaRoutes);
} catch (e) {
  console.error("Erro ao carregar reservaRoutes:", e);
}

try {
  const estacionamentoRoutes = require('./routes/estacionamentoRoutes');
  console.log("estacionamentoRoutes carregado");
  app.use("/estacionamentos", estacionamentoRoutes);
} catch (e) {
  console.error("Erro ao carregar estacionamentoRoutes:", e);
}

app.get("/", (req, res) => res.send("Back-end respondendo"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});