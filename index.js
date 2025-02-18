const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "view"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
