import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: String,
  precio: Number,
  disponible: Boolean
});

export default mongoose.model("Producto", productoSchema);
