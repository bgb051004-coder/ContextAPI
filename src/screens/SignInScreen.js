import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function SignInScreen() {

  const { login } = useContext(AuthContext);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{color:"white"}}>Sign In</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    padding:20
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:30
  },
  input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:12,
    marginBottom:15
  },
  button:{
    backgroundColor:"orange",
    padding:15,
    alignItems:"center"
  }
});