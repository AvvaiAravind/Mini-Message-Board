const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("^/$|/index(.html)?", (_req, res) => {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});

router.get("/new(.html)?", (_req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new(.html)?", (req, res) => {
  const { user, message } = req.body;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
