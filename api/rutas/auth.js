const router= require('express').Router();
const Usuario=require('../modelos/Usuario');
const CryptoJS=require('crypto-js');
const jwt=require('jsonwebtoken');

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
// Login
router.post("/login", async (req, res) => {
    try {
      const usuario = await Usuario.findOne({ email: req.body.email });
      if (!usuario) {
        return res.status(401).json("Usuario o contraseña incorrectos");
      }
  
      const bytes = CryptoJS.AES.decrypt(usuario.password.toString(), process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  
      if (originalPassword !== req.body.password) {
        return res.status(401).json("Usuario o contraseña incorrectos");
      }
      const accessToken = jwt.sign({ id: usuario._id, isAdmin: usuario.isAdmin },
         process.env.SECRET_KEY, { expiresIn: "5d"});
      const { password, ...info } = usuario._doc;
  
      res.status(200).json({...info, accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports=router;