const router= require('express').Router();
const Usuario=require('../modelos/Usuario');
const CryptoJS=require('crypto-js');
const verify=require('../verificarToken');

//Actualizar
router.put("/:id",verify,async (req,res)=>{
    if(req.usuario.id===req.params.id || req.usuario.isAdmin){
        if(req.body.password){
            req.body.password=CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString();
        }
        try{
            const usuarioActualizado=await Usuario.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(usuarioActualizado);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("Puedes actualizar tu cuenta");
    }
});

//Eliminar
router.delete("/:id",verify,async (req,res)=>{
    if(req.usuario.id===req.params.id || req.usuario.isAdmin){
        try{
            await Usuario.findByIdAndDelete(req.params.id);
            res.status(200).json("Usuario eliminado");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("Puedes eliminar tu cuenta");
    }
});

//Obtener
router.get("/find/:id",async (req,res)=>{
    try{
        const usuario=await Usuario.findById(req.params.id);
        const {password,...info}=usuario._doc;
        res.status(200).json(info);
    }catch(err){
        res.status(500).json(err);
    }
});

//Obtener todos
router.get("/",verify,async (req,res)=>{
    const query=req.query.new;
    if(req.usuario.isAdmin){
        try{
            const usuarios=query?await Usuario.find().sort({_id:-1}).limit(10):await Usuario.find();
            res.status(200).json(usuarios);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("No eres administrador");
    }
});

//Obtener estadisticas
router.get("/stats",async (req,res)=>{
    const hoy=new Date();
    const ultimoAnio=new Date(hoy.setFullYear(hoy.getFullYear()-1));

    const mesesArray=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
    "Septiembre","Octubre","Noviembre","Diciembre"];

    try{
        const data=await Usuario.aggregate([
            {$project:{month:{$month:"$createdAt"}}},
            {$group:{_id:"$month",total:{$sum:1}}}
        ]);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
});
module.exports=router;