import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function IconButton({ type }) {

  const isGoogle = type === "google";

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        isGoogle ? styles.google : styles.facebook
      ]}
    >
      <View style={styles.row}>
        
        {isGoogle ? (
          <AntDesign name="google" size={18} color="#DB4437" />
        ) : (
          <FontAwesome name="facebook" size={18} color="#fff" />
        )}

        <Text
          style={[
            styles.text,
            { color: isGoogle ? "#000" : "#fff" }
          ]}
        >
          {isGoogle ? "Google" : "Facebook"}
        </Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "48%",   // 👈 chia đều 2 nút
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    marginLeft: 8,
    fontWeight: "500",
  },

  google: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  facebook: {
    backgroundColor: "#4267B2",
  },
});