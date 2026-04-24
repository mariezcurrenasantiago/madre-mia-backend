import Producto from "../models/Producto.js";

export const crearProducto = async (req, res) => {
  try {
    const nuevo = new Producto(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
