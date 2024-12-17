const axios = require("axios")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

const newsRoutes = require("./routes/noticias_routes");

const app = express()
const PORT = 5000

app.use(cors({
    origin: 'exp://192.168.0.92:8081' // Substitua pelo seu domínio ou URL do front-end
  }));
  app.use(express.json())

app.use("/api/noticias", newsRoutes);

app.listen(PORT, () => console.log("Servidor na porta", PORT))