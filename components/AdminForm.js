import {
  KeyboardAvoidingView,
  Pressable,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const AdminForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Admin Form</Text>
    </View>
  );
};

export default AdminForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative", // Sử dụng position: "relative" để phần tử con có thể sử dụng position: "absolute" để định v
  },
});
