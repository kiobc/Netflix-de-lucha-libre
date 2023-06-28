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

module.exports=router;