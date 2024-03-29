import {
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.logoImage}
        />
        <Text style={styles.slogan}>New slogan</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Email / Username"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Picker
        style={styles.input}
        onValueChange={(itemValue) => handleRoleChange(itemValue)}
      >
        <Picker.Item label="Select Role" value="" />
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Contributor" value="ctv" />
      </Picker>

      <TouchableOpacity
        onPress={() => navigation.navigate("AdminForm")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In / Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative", // Sử dụng position: "relative" để phần tử con có thể sử dụng position: "absolute" để định v
  },
  logoContainer: {
    width: "100%", // Chiếm toàn bộ chiều rộng của màn hình
    backgroundColor: "black",
    alignItems: "center",
    position: "absolute", // Định vị phần tử
    top: 0,
    paddingBottom: 200, // Chạm vào phía trên cùng của màn hình
  },
  logoImage: {
    width: 450, // Thay đổi kích thước theo ý của bạn
    height: 240, // Thay đổi kích thước theo ý của bạn
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  slogan: {
    fontSize: 16,
    color: "grey",
  },
  input: {
    width: "80%",
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "grey",
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
