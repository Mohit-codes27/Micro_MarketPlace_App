import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ProductCard({ product, onPress, onFavorite }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <View style={styles.row}>
        <Text style={styles.title}>{product.title}</Text>

        <TouchableOpacity onPress={() => onFavorite(product._id)}>
          <Text style={{ fontSize: 20 }}>❤️</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.price}>₹ {product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    marginTop: 5,
  },
});
