import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function AccountScreen(){

  const { logout } = useContext(AuthContext);

  return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

      <Text>Account Screen</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={{color:"red",marginTop:20}}>Sign Out</Text>
      </TouchableOpacity>

    </View>
  )
}