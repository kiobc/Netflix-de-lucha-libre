const router= require('express').Router();
const Usuario=require('../modelos/Usuario');
const CryptoJS=require('crypto-js');

// Registro
router.post("/registro",async (req,res)=>{
const nuevoUsuario=new Usuario({
    usuario:req.body.usuario,
    email:req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
});
try{
const usuario= await nuevoUsuario.save();
res.status(200).json(usuario);
}catch(err){
    res.status(500).json(err);
}
});
module.exports=router;