const express = require("express");
const rotas = require("./routes/rotas");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use(express.static("./resources/Tema_Principal/"));

app.use(express.json());
app.use(rotas);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
