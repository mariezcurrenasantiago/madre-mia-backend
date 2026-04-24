import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import conectarDB from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

// conectar base de datos
conectarDB();

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/productos", productoRoutes);

// middleware de errores
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API Madre Mía funcionando");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
