import React, { useState, useEffect, useRef } from "react";

import {
  ActivityIndicator,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import styles from "./css/FormUserStyle";
import {
  GestureHandlerRootView,
  ScrollView as GestureHandlerScrollView,
} from "react-native-gesture-handler";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

export default function UserForm({ route }) {
  // TẠO 1 HÀM GET USER_NAME TỪ ĐĂNG NHẬP, RÚT TIỀN ĐỂ GỬI CHO MONACO VỚI SWIPEABLE LÀ XONG
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();

  const { inputText } = route.params;
  const user_name = inputText;
  // xử lí button

  const handlePress = () => {
    console.log("Button pressed");
    // Xử lý các hành động khi nút được nhấn ở đây
  };
  const firebaseConfig = {
    apiKey: "AIzaSyCicrLXIoWCQd3XvIFoNaUrYpuCRydsgaQ",
    authDomain: "bookingshit-3c16d.firebaseapp.com",
    databaseURL: "https://bookingshit-3c16d-default-rtdb.firebaseio.com",
    projectId: "bookingshit-3c16d",
    storageBucket: "bookingshit-3c16d.appspot.com",
    messagingSenderId: "948204112931",
    appId: "1:948204112931:web:c44088284d7536bd9af596",
    measurementId: "G-WKYFMTPZJ6",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);
  // Đặt hàng
  const [text1, co_so] = useState("");
  const [text2, ten_khach_hang] = useState("");
  const [text3, so_dien_thoai] = useState("");
  const [text4, thoi_gian_1] = useState("");
  const [text5, thoi_gian_2] = useState("");

  function create(path, name, value) {
    set(ref(database, path + name), value);
  }

  function read(path, value) {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, path))
      .then((snapshot) => {
        if (snapshot.exists()) {
          value.val = snapshot.val();
          return value.val; // Returning the value for further handling
        } else {
          console.log("No data available");
          return null; // Returning null if no data is available
        }
      })
      .catch((error) => {
        console.error(error);
        return null; // Returning null in case of an error
      });
  }

  const dat_hang = async () => {
    var values = { val: null };
    await read("Booking/Value", values);
    console.log(values.val); // Will contain the value after reading from the database
    // Do something with the input values
    var value = values.val;
    if (value > 1000) {
      value = 0;
    }
    value += 1;
    if (text1 && text2 && text3 && text4 && text5) {
      Alert.alert(
        "Đơn hàng đã được gửi lên hệ thống \n Xin hãy chờ để được xác nhận"
      );
      create(
        "/Booking/" + value.toString() + "/",
        "Account",
        user_name.toString()
      );
      create("/Booking/" + value.toString() + "/", "Hub", text1);
      create("/Booking/" + value.toString() + "/", "Name", text2);
      create("/Booking/" + value.toString() + "/", "Phone", text3);
      create("/Booking/" + value.toString() + "/", "Time", text5 + text4);
      create("/Booking/" + value.toString() + "/", "Amount", 0);
      create("/Booking/", "Value", value);
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Account",
        user_name.toString()
      );
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Hub",
        text1
      );
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Name",
        text2
      );
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Phone",
        text3
      );
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Time",
        text5 + text4
      );
      create(
        "/User_management/" +
          user_name.toString() +
          "/Account/Booking/" +
          value.toString() +
          "/",
        "Amount",
        "0"
      );
    } else {
      // Xử lý khi một hoặc nhiều biến text không tồn tại
      Alert.alert("Vui lòng điền đầy đủ thông tin khách hàng");
    }
  };
  // user_management/username/'Account'/'Booking'/Value/co_so, time, value
  const [don_hang, setDonHang] = useState({ val: null });
  const [remain, Amount_remain] = useState({ val: null });
  const [total, set_total] = useState({ val: null });
  const [dataFetched, setDataFetched] = useState(false);
  const donHangTichLuy = async () => {
    try {
      const donHangData = { val: null };
      const my_total = { val: null };
      await read(
        "User_management/" + user_name.toString() + "/Account/Booking",
        donHangData
      );
      await read(
        "User_management/" + user_name.toString() + "/Agency",
        my_total
      );

      // Cập nhật state với dữ liệu mới
      setDonHang(donHangData);
      set_total(my_total);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Gọi hàm khi component được render
    donHangTichLuy();
  }, []); // Chỉ gọi một lần sau khi component được render
  if (!dataFetched) {
    return <ActivityIndicator />; // Hiển thị indicator khi đang fetch dữ liệu
  }
  console.log(don_hang.val);
  console.log(don_hang.val);

  const carouselData = [
    {
      id: "01",
      image: require("../assets/images/DSC00200.jpg"),
    },
    {
      id: "02",
      image: require("../assets/images/DSC00593.jpg"),
    },
    {
      id: "03",
      image: require("../assets/images/DSC00791.jpg"),
    },
  ];

  const getItemLayout = (data, index) => ({
    length: windowWidth,
    offset: windowWidth * index,
    index: index,
  });

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = scrollPosition / windowWidth;

    setActiveIndex(index);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ paddingHorizontal: 30 }}>
        {/* Thêm margin horizontal */}
        <View style={{ width: windowWidth - 60 }}>
          {/* Trừ đi tổng margin */}
          <Image
            source={item.image}
            style={{
              height: 200,
              width: windowWidth - 60,
              borderRadius: 10, // Trừ đi tổng margin
            }}
          />
        </View>
      </View>
    );
  };

  const renderDotIndicator = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex.toFixed() == index) {
        return <View key={index} style={[styles.dot, styles.dotActive]}></View>;
      } else {
        return <View key={index} style={styles.dot}></View>;
      }
    });
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
              source={require("../assets/logo.jpg")}
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

          <View style={styles.flex_row}>
            <ImageBackground
              source={require("../assets/images/DSC00200.jpg")}
              style={{ width: 85, height: 85, marginLeft: 20, marginRight: 20 }}
            ></ImageBackground>
            <View style={styles.flex_column}>
              <Text style={[styles.br_20]}></Text>
              <Text style={{ fontSize: 20 }}>{user_name}</Text>
              <View style={styles.flex_row}>
                <Text>{total.val.Amount_total} </Text>
                <Text>Level {total.val.Level}</Text>
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
                <Text style={[styles.buttonText]}>
                  Tiền hiện tại: {total.val.Amount_remain}{" "}
                </Text>
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
          <View style={styles.orderContainer}>
            <GestureHandlerScrollView
              style={styles.scrollViews}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContent}
            >
              {don_hang.val &&
                Object.keys(don_hang.val)
                  .sort((a, b) => a - b) // Sắp xếp các khóa theo thứ tự tăng dần
                  .map((key) => (
                    <View key={key} style={[styles.flex]}>
                      <Text style={[styles.br_10]}></Text>
                      <View
                        style={[
                          styles.block,
                          {
                            width: "100%",
                            backgroundColor:
                              don_hang.val[key].Amount === "0"
                                ? "white"
                                : "#009476",
                          },
                        ]}
                      >
                        <Text style={styles.top_right}>
                          ${don_hang.val[key].Amount}
                        </Text>
                        <Text style={styles.text}>{don_hang.val[key].Hub}</Text>
                        <Text style={styles.text}>
                          {don_hang.val[key].Time}
                        </Text>
                      </View>
                      <Text style={[styles.br_10]}></Text>
                    </View>
                  ))}
            </GestureHandlerScrollView>
          </View>

          <Text style={[styles.br_60]}></Text>
          {/* swipeable */}
          <FlatList
            data={carouselData}
            ref={flatlistRef}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
            pagingEnabled={true}
            onScroll={handleScroll}
          />
          <Text style={[styles.br_20]}></Text>
          <View style={styles.dotIndicator}>{renderDotIndicator()}</View>

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
              onChangeText={co_so}
              value={text1}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Tên khách hàng
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={ten_khach_hang}
              value={text2}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Số điện thoại
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={so_dien_thoai}
              value={text3}
              placeholder="Username"
              placeholderTextColor="#888"
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>
              Thời gian
            </Text>
            <View style={[styles.flex_row, { flex: 1 }]}>
              <TextInput
                style={[styles.input_new, { width: "60%" }]}
                onChangeText={thoi_gian_1}
                value={text4}
                placeholder="Username"
                placeholderTextColor="#888"
              />
              <TextInput
                style={[styles.input_new, { width: "20%" }]}
                onChangeText={thoi_gian_2}
                value={text5}
                placeholder="Username"
                placeholderTextColor="#888"
              />
            </View>
            <View style={styles.container_inside}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.secondButton, { width: "50%" }]}
                  onPress={dat_hang}
                >
                  <Text style={[styles.buttonText]}>submit</Text>
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
          <Text style={[styles.br_30]}></Text>
        </GestureHandlerScrollView>
      </GestureHandlerRootView>
    </>
  );
}
