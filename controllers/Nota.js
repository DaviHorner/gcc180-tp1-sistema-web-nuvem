const Todo = require("../model/Nota");

const getTodos = (req, res) => {
  Nota.find((err, notas) => {
    if (err) {
      res.send(err);
    }
    res.json(notas);
  });
};

const createNota = (req, res) => {
  const nota = new Nota({
    titulo: req.body.titulo,
    desc: req.body.desc,
    completado: req.body.completado,
  });

  nota.save((err, nota) => {
    if (err) {
      res.send(err);
    }
    res.json(nota);
  });
};

const updateNota = (req, res) => {
  Todo.findOneAndUpdate(
    { _id: req.params.notaID },
    {
      $set: {
        titulo: req.body.titulo,
        desc: req.body.desc,
        completado: req.body.completado,
      },
    },
    { new: true },
    (err, Nota) => {
      if (err) {
        res.send(err);
      } else res.json(Nota);
    }
  );
};

const deleteNota = (req, res) => {
  Nota.deleteOne({ _id: req.params.notaID })
    .then(() => res.json({ message: "Nota Deletada" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getNotas,
  createNota,
  updateNota,
  deleteNota,
};