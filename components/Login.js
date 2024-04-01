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

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
const Login = () => {
  const navigation = useNavigation();
  const data = [
    { label: "Admin", value: "1" },
    { label: "Contributor", value: "2" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select role" : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("AdminForm")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In Admin / Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("UserForm")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Log In User / Sign Up</Text>
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
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#E7E7E7",
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
