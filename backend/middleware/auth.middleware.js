const jwt = require("jsonwebtoken");

// Middleware d'authentification
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token manquant ou invalide" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Assurez-vous d'avoir défini JWT_SECRET
    req.user = decoded; // Ici, req.user contiendra id, role, etc.
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalide" });
  }
};
module.exports = authenticate;
