const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./rutas/auth');
const usuarioRuta=require('./rutas/usuario');
const peliculaRuta=require('./rutas/pelicula');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conexión a MongoDB exitosa!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/usuario",usuarioRuta);
app.use("/api/pelicula",peliculaRuta);

app.listen(8800, () => {
  console.log("¡El servidor backend está corriendo!");
});
