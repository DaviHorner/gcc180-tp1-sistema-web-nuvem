const {
    getNotas,
    createNota,
    updateNota,
    deleteNota,
  } = require("./controllers/Nota");
  
  const router = require("express").Router();
  
  router.get("/", (req, res) => {
    res.send("sistema-web-nuvem");
  });
  
  router.get("/notas", getNotas);
  router.post("/notas", createNota);
  router.put("/todos/:notaID", updateNota);
  router.delete("/todos/:notaID", deleteNota);
  
  module.exports = router;