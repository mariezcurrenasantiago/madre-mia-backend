import Producto from "../models/Producto.js";

// ✅ CREAR PRODUCTO
export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ OBTENER TODOS LOS PRODUCTOS
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ ACTUALIZAR PRODUCTO
export const actualizarProducto = async (req, res) => {
  try {
    const actualizado = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!actualizado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ ELIMINAR PRODUCTO
export const eliminarProducto = async (req, res) => {
  try {
    const eliminado = await Producto.findByIdAndDelete(req.params.id);

    if (!eliminado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    res.json({ mensaje: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
