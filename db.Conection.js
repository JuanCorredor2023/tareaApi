const mongoose = require("mongoose");

const atlas =
  "mongodb+srv://juan_corredor:1021633255@cluster0.mcyjw.mongodb.net/empresaDB?retryWrites=true&w=majority";
const local = "mongodb://localhost/dbName";

mongoose
  .connect(atlas, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((db) => console.log("base de datos conectada"))
  .catch((err) => console.log(err));

module.exports = mongoose;
