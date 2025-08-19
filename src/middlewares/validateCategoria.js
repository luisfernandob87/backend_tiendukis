import Categoria from "../models/Categoria.js";

export const checkDuplicateCategoria = async (req, res, next) => {
    try {
        const categoria = await Categoria.findOne({ nombre: req.body.nombre });
        if (categoria) {
            return res.status(400).json({ message: "La categoría ya existe" });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: "Error al verificar la categoría" });
    }
};

