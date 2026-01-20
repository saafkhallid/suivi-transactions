const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("TOKEN DECODED:", decoded); // 👈 IMPORTANT

    req.user = decoded; // 👈 OBLIGATOIRE
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalide" });
  }
};
module.exports = isAuth;

