const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./rutas/auth');
const usuarioRuta = require('./rutas/usuario');
const peliculaRuta = require('./rutas/pelicula');
const listaRuta = require('./rutas/lista');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conexión a MongoDB exitosa!"))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization, token', // Agrega el encabezado 'token' a la lista de encabezados permitidos
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  next();
});

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/usuario", usuarioRuta);
app.use("/api/pelicula", peliculaRuta);
app.use("/api/lista", listaRuta);

app.listen(8800, () => {
  console.log("¡El servidor backend está corriendo!");
});
