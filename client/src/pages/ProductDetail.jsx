import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../api/api";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p style={{ padding: "30px" }}>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={styles.container}
    >
      <img src={product.image} alt={product.title} style={styles.image} />
      <div>
        <h2>{product.title}</h2>
        <h3>₹ {product.price}</h3>
        <p>{product.description}</p>
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
  },
  image: {
    width: "350px",
    borderRadius: "12px",
  },
};

export default ProductDetail;
