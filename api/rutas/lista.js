const router = require("express").Router();
const Lista = require("../modelos/Lista");
const verify = require("../verificarToken");

//Crear
router.post("/", verify, async (req, res) => {
    if (req.usuario.isAdmin) {
        const nuevaLista = new Lista(req.body);
        try {
        const listaGuardada = await nuevaLista.save();
        res.status(201).json(listaGuardada);
        } catch (err) {
        res.status(500).json(err);
        }
    } else {
        res.status(403).json("No estas autorizado");
    }
});

//eliminar
router.delete("/:id", verify, async (req, res) => {
    if (req.usuario.isAdmin) {
        try {
        await Lista.findByIdAndDelete(req.params.id);
        res.status(201).json("La lista ha sido eliminada");
        } catch (err) {
        res.status(500).json(err);
        }
    } else {
        res.status(403).json("No estas autorizado");
    }
});

//obtener
router.get("/", verify, async (req, res) => {
    const tipoQuery = req.query.tipo;
    const generoQuery = req.query.genero;
    let lista = [];
    try {
        if (tipoQuery) {
        if (generoQuery) {
            lista = await Lista.aggregate([
            { $sample: { size: 10 } },
            { $match: { tipo: tipoQuery, genero: generoQuery } },
            ]);
        } else {
            lista = await Lista.aggregate([
            { $sample: { size: 10 } },
            { $match: { tipo: tipoQuery } },
            ]);
        }
        } else {
        lista = await Lista.aggregate([{ $sample: { size: 10 } }]);
        }
        res.status(200).json(lista);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;