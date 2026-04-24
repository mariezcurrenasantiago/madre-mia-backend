import express from "express";
import Producto from "../models/Producto.js";

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
