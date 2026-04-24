const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    mensaje: "Error del servidor",
    error: err.message
  });
};

export default errorHandler;
