import { useState, useContext } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import API from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setToken } = useContext(AuthContext);

  const handleLogin = async () => {
  try {
    const { data } = await API.post("/auth/login", {
      email,
      password,
    });

    setUser(data.user);
    setToken(data.token); // 👈 store token

    navigation.replace("Home");
  } catch (error) {
    alert("Invalid credentials");
  }
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
});
