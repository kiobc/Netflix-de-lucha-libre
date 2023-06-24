const mongoose=require('mongoose');

const UsuarioSchema=new mongoose.Schema({
    usuario:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    imagenPerfil:{type:String,default:""},
    isAdmin:{type:Boolean,default:false},
},{timestamps:true});
module.exports=mongoose.model("Usuario",UsuarioSchema);