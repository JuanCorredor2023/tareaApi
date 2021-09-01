const express = require("express");
const morgan = require("morgan");

// importar coneccion a base de datos
const staBase=require("./db.Conection")

// importacion de rutas 
const appRoutes = require('./routes/app.routes')

const app = express();

// conf
const port = 6000;

//  middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
// app.use("/app", require("./routes/app.routes"));
app.use("/app", appRoutes)
// ejecucuion de al app
app.listen(port, () => {
  console.log("servidor escuchando el puerto", port);
});
