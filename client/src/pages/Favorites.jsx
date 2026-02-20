import { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const { data } = await API.get("/products/favorites/me");
    setFavorites(data);
  };

  const toggleFavorite = async (id) => {
    await API.patch(`/products/${id}/favorite`);
    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Favorites</h2>

      <div style={grid}>
        {favorites.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onFavorite={toggleFavorite}
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "20px",
};

export default Favorites;
