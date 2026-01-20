// Middleware pour vérifier si l'utilisateur est admin
const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Accès réservé à l’administrateur" });
  }

  next();
};

module.exports = isAdmin;
