import Proveedor from "../models/Proveedor.js";

export const checkDuplicateProveedor = async (req, res, next) => {
    try {
        const proveedor = await Proveedor.findOne({ nombre: req.body.nombre });
        if (proveedor) {
            return res.status(400).json({ message: "El proveedor ya existe" });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: "Error al verificar el proveedor" });
    }
};

