import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import CustomTextInput from "../components/CustomTextInput";
import IconButton from "../components/IconButton";

export default function SignInScreen({ navigation }) {
  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Email */}
      <Text style={styles.label}>Email ID</Text>
      <CustomTextInput placeholder="Enter your email here!" />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <CustomTextInput
        placeholder="Enter your password here!"
        secureTextEntry
      />

      {/* Forgot password */}
      <TouchableOpacity onPress={() => navigation.navigate("Forgot")}>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity style={styles.signInBtn} onPress={login}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      {/* Divider */}
      <Text style={styles.or}>Or sign in with</Text>

      {/* Social buttons */}
      <View style={styles.socialRow}>
        <IconButton type="google" />
        <IconButton type="facebook" />
      </View>

      {/* Sign up */}
      <Text style={styles.signup}>
        Not yet a member? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },

  forgot: {
    textAlign: "right",
    color: "orange",
    marginBottom: 20,
  },

  signInBtn: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 20,
  },

  signInText: {
    color: "#fff",
    fontWeight: "bold",
  },

  or: {
    textAlign: "center",
    color: "#666",
    marginBottom: 15,
  },

  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  signup: {
    textAlign: "center",
    color: "#666",
  },

  signupLink: {
    color: "orange",
    fontWeight: "bold",
  },

});