import { useEffect, useState } from "react";
import {
    View,
    FlatList,
    TextInput,
    Button,
    StyleSheet,
    Text,
} from "react-native";
import API from "../api/api";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await API.get(
                `/products?search=${search}&page=${page}&limit=6`
            );

            if (page === 1) {
                setProducts(data.products);
            } else {
                setProducts((prev) => [...prev, ...data.products]);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleFavorite = async (id) => {
        try {
            await API.patch(
                `/products/${id}/favorite`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };


    useEffect(() => {
        setPage(1);
    }, [search]);

    useEffect(() => {
        fetchProducts();
    }, [search, page]);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Search products..."
                style={styles.search}
                onChangeText={setSearch}
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "#111",
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 10,
                }}
                onPress={() => navigation.navigate("Favorites")}
            >
                <Text style={{ color: "#fff", textAlign: "center" }}>
                    View Favorites
                </Text>
            </TouchableOpacity>


            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <ProductCard
                        product={item}
                        onPress={() => navigation.navigate("Detail", { id: item._id })}
                        onFavorite={toggleFavorite}
                    />
                )}
            />

            {loading && <Text style={{ textAlign: "center" }}>Loading...</Text>}

            <Button title="Load More" onPress={() => setPage(page + 1)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 15 },
    search: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15,
    },
});
