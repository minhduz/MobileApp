import React from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./css/FormUserStyle";
import {
  GestureHandlerRootView,
  ScrollView as GestureHandlerScrollView,
} from "react-native-gesture-handler";

export default function UserForm() {
  const handlePress = () => {
    console.log("Button pressed");
    // Xử lý các hành động khi nút được nhấn ở đây
  };
  return (
    <>
      <GestureHandlerRootView
        style={[styles.white, styles.width_100, styles.height_100]}
      >
        <GestureHandlerScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {/* header */}
          <View style={[styles.flex, styles.black]}>
            <Text style={[styles.br_60]}></Text>
            <Text style={[styles.br_10]}></Text>
            <ImageBackground
              source={require("../assets/images/DSC00200.jpg")}
              style={styles.logo}
            ></ImageBackground>
            <Text style={[styles.br_20]}></Text>
            <Text style={[{ color: "white", fontSize: 16 }]}>slogan</Text>

            <ImageBackground
              source={require("../assets/images/tra.png")}
              style={{ width: "100%", height: 115 }}
            ></ImageBackground>
          </View>

          {/* user */}
          <Text style={[styles.br_30]}></Text>

          <View style={styles.flex_row}>
            <ImageBackground
              source={require("../assets/images/DSC00200.jpg")}
              style={{ width: 85, height: 85, marginLeft: 20, marginRight: 20 }}
            ></ImageBackground>
            <View style={styles.flex_column}>
              <Text style={[styles.br_20]}></Text>
              <Text style={{ fontSize: 20 }}>User</Text>
              <View style={styles.flex_row}>
                <Text>Tổng tiền </Text>
                <Text>Level 1</Text>
              </View>
            </View>
          </View>
          <Text style={[styles.br_20]}></Text>
          <View style={styles.container_inside}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.firstButton]}
                onPress={handlePress}
              >
                <Text style={[styles.buttonText]}>Tiền hiện tại: </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.secondButton]}
                onPress={handlePress}
              >
                <Text style={[styles.buttonText]}>Rút tiền</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.br_20]}></Text>

          {/* Đơn hàng tích lũy */}
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            Đơn hàng tích lũy
          </Text>
          <Text style={[styles.br_20]}></Text>
          <GestureHandlerScrollView
            style={styles.scrollViews}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.flex}>
              <Text style={[styles.br_10]}></Text>
              <View style={styles.block}>
                <Text style={styles.top_right}>$31</Text>
                <Text style={styles.text}>Hospital Shitttt</Text>
                <Text style={styles.text}>15 Sep 2022</Text>
              </View>
              <Text style={[styles.br_10]}></Text>
            </View>
            <View style={styles.flex}>
              <Text style={[styles.br_10]}></Text>
              <View style={styles.block}>
                <Text style={styles.top_right}>$31</Text>
                <Text style={styles.text}>Hospital Shitttt</Text>
                <Text style={styles.text}>15 Sep 2022</Text>
              </View>
              <Text style={[styles.br_10]}></Text>
            </View>
            <View style={styles.flex}>
              <Text style={[styles.br_10]}></Text>
              <View style={styles.block}>
                <Text style={styles.top_right}>$31</Text>
                <Text style={styles.text}>Hospital Shitttt</Text>
                <Text style={styles.text}>15 Sep 2022</Text>
              </View>
              <Text style={[styles.br_10]}></Text>
            </View>
            <View style={styles.flex}>
              <Text style={[styles.br_10]}></Text>
              <View style={styles.block}>
                <Text style={styles.top_right}>$31</Text>
                <Text style={styles.text}>Hospital Shitttt</Text>
                <Text style={styles.text}>15 Sep 2022</Text>
              </View>
              <Text style={[styles.br_10]}></Text>
            </View>
            <View style={styles.flex}>
              <Text style={[styles.br_10]}></Text>
              <View style={styles.block}>
                <Text style={styles.top_right}>$31</Text>
                <Text style={styles.text}>Hospital Shitttt</Text>
                <Text style={styles.text}>15 Sep 2022</Text>
              </View>
              <Text style={[styles.br_10]}></Text>
            </View>
          </GestureHandlerScrollView>

          <Text style={[styles.br_60]}></Text>
          {/* swipeable */}
          <Text>Swipeable</Text>
          <Text>Swipeable</Text>
          <Text>Swipeable</Text>
          <Text>Swipeable</Text>
          <Text>Swipeable</Text>

          <Text style={[styles.br_40]}></Text>
          {/* Đặt hàng */}
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            Đặt hàng
          </Text>
          <Text style={[styles.br_20]}></Text>
          <View style={[styles.scrollViews, { height: 450 }]}>
            <Text style={[styles.br_10]}></Text>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Cơ sở
            </Text>
            <TextInput
              style={[styles.input]}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Tên khách hàng
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Số điện thoại
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Thời gian
            </Text>
            <View style={[styles.flex_row, { flex: 1 }]}>
              <TextInput
                style={[styles.input_new, { width: "60%" }]}
                placeholder="Username"
                placeholderTextColor="#888"
              />
              <TextInput
                style={[styles.input_new, { width: "20%" }]}
                placeholder="Username"
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.container_inside}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.secondButton]}
                  onPress={handlePress}
                >
                  <Text style={[styles.buttonText]}>NO</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.secondButton]}
                  onPress={handlePress}
                >
                  <Text style={[styles.buttonText]}>YES</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={[styles.br_40]}></Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 20 }}>
            Mã QR của tôi
          </Text>
          <Text style={[styles.br_20]}></Text>
          <View style={styles.flex}>
            <ImageBackground
              source={require("../assets/images/DSC00200.jpg")}
              style={[
                { width: 250, height: 250, marginLeft: 20, marginRight: 20 },
              ]}
            ></ImageBackground>
          </View>
        </GestureHandlerScrollView>
      </GestureHandlerRootView>
    </>
  );
}
