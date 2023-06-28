const jwt = require("jsonwebtoken");

function verify(req, res, next) {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, usuario) => {
      if (err) res.status(403).json("Token no es valido");
      req.usuario = usuario;
      next();
    });
  } else {
    return res.status(401).json("Estas autenticado!");
  }
}

module.exports = verify;
