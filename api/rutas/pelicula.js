const router= require('express').Router();
const Pelicula=require('../modelos/Pelicula');
const verify=require('../verificarToken');

//Crear
router.post("/",verify,async (req,res)=>{
    if(req.usuario.isAdmin){
        const nuevaPelicula=new Pelicula(req.body);
        try{
            const peliculaGuardada=await nuevaPelicula.save();
            res.status(201).json(peliculaGuardada);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("No puedes crear una pelicula");
    }
});

//Actualizar
router.put("/:id",verify,async (req,res)=>{
    if(req.usuario.isAdmin){
        try{
            const peliculaActualizada=await Pelicula.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(peliculaActualizada);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("No puedes actualizar una pelicula");
    }
});

//Eliminar
router.delete("/:id",verify,async (req,res)=>{
    if(req.usuario.isAdmin){
        try{
            await Pelicula.findByIdAndDelete(req.params.id);
            res.status(200).json("Pelicula eliminada");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("No puedes eliminar una pelicula");
    }
});

//Obtener
router.get("/:id",verify,async (req,res)=>{
    try{
        const pelicula=await Pelicula.findById(req.params.id);
        res.status(200).json(pelicula);
    }catch(err){
        res.status(500).json(err);
    }
});

//Obtener random
router.get("/random",verify,async (req,res)=>{
    const tipo=req.query.tipo;
    let pelicula;
    try{
        if(tipo==="serie"){
            pelicula=await Pelicula.aggregate([
                {$match:{esSerie:true}},
                {$sample:{size:1}},
            ]);
        }else{
            pelicula=await Pelicula.aggregate([
                {$match:{esSerie:false}},
                {$sample:{size:1}},
            ]);
        }
        res.status(200).json(pelicula);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;