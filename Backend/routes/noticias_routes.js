const express = require("express");
const { noticias, topNoticias } = require("../controllers/noticias_controllers");

const router = express.Router();

// Rota para buscar notícias
router.get("/pesquisa", noticias);
router.get("/top", topNoticias);

module.exports = router;
