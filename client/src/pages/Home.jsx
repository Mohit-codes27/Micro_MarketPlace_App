import { useEffect, useState, useContext } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  const fetchProducts = async () => {
    const { data } = await API.get(
      `/products?search=${search}&page=${page}&limit=6`,
    );
    setLoading(true);
    setProducts(data.products);
    setPages(data.pages);
    setLoading(false);
  };

  const fetchFavorites = async () => {
    if (!user) return;
    const { data } = await API.get("/products/favorites/me");
    setFavorites(data.map((p) => p._id));
  };

  const toggleFavorite = async (id) => {
    if (!user) return alert("Login first");
    await API.patch(`/products/${id}/favorite`);
    fetchFavorites();
  };

  useEffect(() => {
    fetchProducts();
  }, [search, page]);

  useEffect(() => {
    fetchFavorites();
  }, [user]);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Products</h2>

      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="🔍 Search products..."
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "300px" }}
        />
      </div>

      {loading && <p>Loading products...</p>}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={grid}
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onFavorite={toggleFavorite}
            isFavorite={favorites.includes(product._id)}
          />
        ))}
      </motion.div>

      <Pagination page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
};

export default Home;
