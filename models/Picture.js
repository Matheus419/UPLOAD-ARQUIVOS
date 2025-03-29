
// Abaixo o script tem como intuito, criar um padrão para os
// modelos de arquivos que serão encaminhado para o banco de dados antes mesmo de chegar nele
// Caso o arquivo enviado não seguir esse padrão de esquema ou "Schema", irá apresentar um erro
// E não ira subir no banco de dados

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PictureSchema = new Schema({
    name: { type: String, required: true},
    src: { type: String, required: true},
});

module.exports = mongoose.model("Picture", PictureSchema)