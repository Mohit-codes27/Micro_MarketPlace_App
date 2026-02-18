const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth.middleware");

const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
    toggleFavorite,
    getFavorites,
} = require("../controllers/product.controller");

router.get("/favorites/me", protect, getFavorites);
// public
router.get("/", getProducts);
router.get("/:id", getProductById);

// protected
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);
router.patch("/:id/favorite", protect, toggleFavorite);

module.exports = router;
