import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, onFavorite, isFavorite }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      style={styles.card}
    >
      <img src={product.image} alt={product.title} style={styles.image} />

      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      <div style={styles.actions}>
        <Link to={`/product/${product._id}`}>View</Link>
        <button onClick={() => onFavorite(product._id)}>
          {isFavorite ? "💔" : "❤️"}
        </button>
      </div>
    </motion.div>
  );
};

const styles = {
  card: {
    background: "#fff",
    borderRadius: "16px",
    padding: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "0.3s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "10px",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },
};


export default ProductCard;
