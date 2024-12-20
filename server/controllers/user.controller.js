const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require('../config');

const register = async (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({ email: email, password: hash })
        .then((user) => {
          const token = jwt.sign({ email: user.email }, JWT_KEY, {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          res.status(201).json("Success!");
        })
        .catch((err) => res.status(400).json({ error: err.message }));
    })
    .catch((err) => res.status(500).json({ error: err.message }));
};

const login = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: { $regex: `^${email}$`, $options: "i" } }).then(
    (user) => {
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      bcrypt
        .compare(password, user.password)
        .then((result) => {
          if (!result) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
          }
          const token = jwt.sign({ email: user.email }, JWT_KEY, {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          res.status(201).json("Success!");
        })
        .catch((err) => res.status(500).json({ error: err.message }));
    }
  );
};

const profile = (req, res) => {
  res.json({ message: "Success!", email: req.user.email });
};
module.exports = {
  register,
  login,
  profile,
};
