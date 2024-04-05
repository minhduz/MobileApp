import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Carousel from "./components/Carousel";
import Start from "./components/Start";
import Register from "./components/Register";
import AdminForm from "./components/AdminForm";
import UserForm from "./components/UserForm";
import InfoPage1 from "./components/InfoPage1";
import InfoPage2 from "./components/InfoPage2";
import InfoPage3 from "./components/InfoPage3";
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carousel"
          component={Carousel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AdminForm"
          component={AdminForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserForm"
          component={UserForm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoPage1"
          component={InfoPage1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoPage2"
          component={InfoPage2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InfoPage3"
          component={InfoPage3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const style = StyleSheet.create({});
