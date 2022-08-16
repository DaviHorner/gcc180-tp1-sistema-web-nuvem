const mongoose = require("mongoose");

const NotaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  completado: {
    type: Boolean,
    default: false,
  },
  criado: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Nota", NotaSchema);