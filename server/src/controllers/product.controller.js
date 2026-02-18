const Product = require("../models/product.model");
const User = require("../models/user.model");


// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET ALL PRODUCTS (Search + Pagination)
exports.getProducts = async (req, res) => {
  try {
    const { search = "", page = 1, limit = 6 } = req.query;

    const query = {
      title: { $regex: search, $options: "i" },
    };

    const products = await Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Product.countDocuments(query);

    res.json({
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      products,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// GET SINGLE PRODUCT
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// TOGGLE FAVORITE
exports.toggleFavorite = async (req, res) => {
  try {
    const user = req.user;
    const productId = req.params.id;

    const product = await Product.findById(productId);
    if (!product)
      return res.status(404).json({ message: "Product not found" });

    const index = user.favorites.indexOf(productId);

    // add
    if (index === -1) {
      user.favorites.push(productId);
      await user.save();
      return res.json({ message: "Added to favorites" });
    }

    // remove
    user.favorites.splice(index, 1);
    await user.save();

    res.json({ message: "Removed from favorites" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET FAVORITE PRODUCTS
exports.getFavorites = async (req, res) => {
  try {
    const user = await req.user.populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
