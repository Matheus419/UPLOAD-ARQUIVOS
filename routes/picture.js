
// Importando o express para manipular as rotas
const express = require("express")

// Criando um arquivo de rotas pelo Express
const router = express.Router()

//importando o middleware de Upload
const upload = require("../config/multer")

// Controlador das imagens funções lógicas (GET, POST e ETC...)
const PictureController = require ("../controllers/PictureControllers")

// Definindo a rota POST (Upload da IMG e Armz. no DB)
router.post("/", upload.single("file"), PictureController.create);

// Exportando para utilizar em outro arquivo
router.get("/", PictureController.findAll)
