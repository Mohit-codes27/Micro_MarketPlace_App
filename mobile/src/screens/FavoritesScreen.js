import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import API from "../api/api";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



export default function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchFavorites = async () => {
    try {
      const { data } = await API.get("/products/favorites/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setFavorites(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleFavorite = async (id) => {
    try {
      await API.patch(`/products/${id}/favorite`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      fetchFavorites(); // refresh list
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <View style={styles.container}>
      {favorites.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          No favorites yet
        </Text>
      )}

      <FlatList
        data={favorites}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => navigation.navigate("Detail", { id: item._id })}
            onFavorite={toggleFavorite}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
});
