import {
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState, useEffect, useMemo } from "react";
import { Picker } from "@react-native-picker/picker";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  GestureHandlerRootView,
  ScrollView as GestureHandlerScrollView,
} from "react-native-gesture-handler";

import moment from "moment";

const Register = () => {
  const navigation = useNavigation();
  const data = [
    { label: "Kế toán", value: "1" },
    { label: "Cộng tác viên", value: "2" },
    { label: "Đại lí", value: "3" },
    { label: "Phục vụ", value: "4" },
  ];

  const dataGender = [
    { label: "Male", value: "1" },
    { label: "Female", value: "2" },
    { label: "Other", value: "3" },
  ];

  const [labelling, labellingset] = useState("Admin");
  const [isFocus, setIsFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Dob, setDoB] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [gender, setGender] = useState("Male");
  const [role, setRole] = useState("Admin");

  //() => labellingset("Admin");

  const handleSignUp = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !username ||
      !password ||
      !confirmPassword ||
      !email ||
      !fullName ||
      !Dob ||
      !phone ||
      !gender ||
      !role
    ) {
      Alert.alert("Error", "Please fill in all fields");
    } else if (password !== confirmPassword) {
      Alert.alert("Error", "Password and confirm password must match");
    } else if (!moment(Dob, "DD/MM/YYYY", true).isValid()) {
      Alert.alert(
        "Error",
        "Invalid Date of Birth format. Please enter in DD/MM/YYYY format"
      );
    } else if (!emailPattern.test(email)) {
      Alert.alert("Error", "Invalid email format");
    } else {
      // Navigate to the next screen
      navigation.navigate(labelling + "Form", { inputText: username });
    }
  };

  return (
    <GestureHandlerRootView>
      <StatusBar backgroundColor="black"></StatusBar>
      <GestureHandlerScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        backgroundColor="black"
      >
        <View style={styles.formContainer}>
          <Image
            source={require("../assets/logo.jpg")}
            style={styles.logoImage}
          />
        </View>
        <Text style={{ height: "2%" }}></Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={setFullName}
            value={fullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth (DD/MM/YYYY)"
            onChangeText={setDoB}
            value={Dob}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataGender}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Male" : "..."}
            value={gender}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setGender(item.value);
              labellingset(item.label);
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

          <TextInput
            style={styles.input}
            placeholder="Phone"
            secureTextEntry
            onChangeText={setPhone}
            value={phone}
          />
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
            placeholder={!isFocus ? "Admin" : "..."}
            value={role}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setRole(item.value);
              labellingset(item.label);
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

          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <Text style={{ height: 50 }}></Text>
        </View>
      </GestureHandlerScrollView>
    </GestureHandlerRootView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    position: "relative", // Sử dụng position: "relative" để phần tử con có thể sử dụng position: "absolute" để định v
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
    width: "100%", // Thay đổi kích thước theo ý của bạn
    height: 250, // Thay đổi kích thước theo ý của bạn
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
    borderRadius: 5,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#E7E7E7",
    marginTop: 10,
    marginBottom: 10,
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
