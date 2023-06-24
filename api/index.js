const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./rutas/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Conexión a MongoDB exitosa!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("¡El servidor backend está corriendo!");
});
