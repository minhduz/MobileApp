import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  br_40: {
    height: 40,
  },
  br_30: {
    height: 30,
  },
  br_20: {
    height: 20,
  },
  br_10: {
    height: 10,
  },
  br_60: {
    height: 60,
  },
  flex: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flex_row: {
    flexDirection: "row",
  },
  flex_column: {
    flexDirection: "column",
  },
  white: {
    backgroundColor: "#fff",
  },
  black: {
    backgroundColor: "black",
  },
  width_100: {
    width: "100%",
  },
  height_100: {
    height: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },

  container_inside: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row", // Hiển thị các button theo hàng ngang
    paddingHorizontal: 15, // Khoảng cách giữa các nút
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
  },
  secondButton: {
    backgroundColor: "green", // Màu của button thứ hai
    width: "27%",
  },
  firstButton: {
    width: "60%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollViews: {
    width: "90%",
    height: 500,

    marginLeft: "5%",
  },
  top_right: {
    position: "absolute", // Sử dụng vị trí tuyệt đối
    top: 5, // Đặt vị trí của văn bản ở trên cùng của block
    right: 5, // Đặt vị trí của văn bản ở phía bên phải của block
  },
  input: {
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderColor: "black", // Màu của border
    borderWidth: 1, // Độ dày của border
  },
  input_new: {
    flex: 1,
    height: 50,
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
    borderColor: "black", // Màu của border
    borderWidth: 1, // Độ dày của border
  },
  item: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginVertical: 5,
    marginHorizontal: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
  },
  moreButton: {
    // Style cho nút More
  },
  moreButtonText: {
    color: "blue",
    // Thêm style khác nếu cần
  },
  orderContainer: {
    borderColor: "black",
    borderWidth: 2,
    marginHorizontal: "5%",
    padding: "2%",
    borderRadius: 15,
  },
});

export default styles;
