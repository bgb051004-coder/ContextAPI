import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { AuthContext } from "../context/AuthContext";

const { width } = Dimensions.get("window");
const AVATAR_SIZE = width * 0.28;

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      {/* Header */}
      <View style={styles.header} />

      {/* Avatar (đặt riêng, KHÔNG nằm trong header) */}
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar}
      />

      {/* Info Card */}
      <View style={styles.card}>
        <Text style={styles.name}>Bgb</Text>
        <Text style={styles.role}>Mobile developer</Text>

        <Text style={styles.desc}>
          I have above 5 years of experience in native mobile apps development,
          now i am learning React Native
        </Text>

        <TouchableOpacity style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 180,
    backgroundColor: "#1da1f2",
  },

  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 4,
    borderColor: "#fff",
    marginTop: -AVATAR_SIZE / 2,
  },

  card: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    marginTop: 15,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  name: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    marginTop: 10,
  },

  role: {
    color: "#1da1f2",
    marginBottom: 10,
    fontSize: width * 0.035,
  },

  desc: {
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
    fontSize: width * 0.035,
  },

  button: {
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});