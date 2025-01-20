const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const users = {};

router.post("/login", (req, res) => {
  const user = req.body;

  if (!users[user.username] || users[user.username] !== user.password) {
    return res.status(400).json({ msg: "Invalid username or password" });
  }
  res.json({
    msg: "Successfully logged in",
    token: jwt.sign({ user: user.username }, "SECRET")
  });
});

router.post("/register", (req, res) => {
  const user = req.body;
  if (users[user.username]) {
    return res.status(400).json({ msg: "User already exists, please login." });
  }
  users[user.username] = user.password;
  console.log("Usuarios registrados:", users); // Verificamos qué usuarios se están guardando porque tengo un problema con el registro. Todo ok.

  res.json({
    msg: "Successfully created user, please login"
  });
});

module.exports = router;
