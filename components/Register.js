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
import {Picker} from '@react-native-picker/picker'
import { Image } from "react-native";
import React, { useState, useEffect } from "react";

const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.jpg')} style={styles.logoImage} />
        <Text style={styles.slogan}>KARAOKE</Text>
      </View>
      <Picker
        style={styles.input}
        onValueChange={(itemValue) => handleRoleChange(itemValue)}
      >
        <Picker.Item label="Chọn vai trò" value="" />
        <Picker.Item label="Quản trị viên" value="admin" />
        <Picker.Item label="Cộng tác viên" value="ctv" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Email / Username"
        keyboardType="email-address"
      />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Đăng kí</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative", // Sử dụng position: "relative" để phần tử con có thể sử dụng position: "absolute" để định v
  },
  logoImage: {
    width: 451, // Thay đổi kích thước theo ý của bạn
    height: 240, // Thay đổi kích thước theo ý của bạn
  },
  logoContainer: {
    width: "100%", // Chiếm toàn bộ chiều rộng của màn hình
    backgroundColor: "black",
    alignItems: "center",
    position: "absolute", // Định vị phần tử
    top: 0,
    paddingBottom: 200, // Chạm vào phía trên cùng của màn hình
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  slogan: {
    fontSize: 30,
    color: "white",
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
