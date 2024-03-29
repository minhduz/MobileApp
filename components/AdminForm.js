import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';

//sau add lenh read firebase
const DATA = [
  {
    id: '1',
    title: 'Order at Monaco 1',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  {
    id: '2',
    title: 'Order at Monaco 2',
  },
  // Thêm các đơn hàng khác theo cấu trúc này
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.moreButton}>
      <Text style={styles.moreButtonText}>More</Text>
      {/* Icon cho nút More có thể thêm vào đây */}
    </TouchableOpacity>
  </View>
);

const AdminForm = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        title={item.title}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Users Email</Text>
        {/* Nút Edit có thể thêm vào đây */}
      </View>
      <Text style={styles.sectionTitle}>Đơn hàng</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Text style={styles.sectionTitle}>Yêu cầu thanh toán</Text>
      {/* Thêm danh sách yêu cầu thanh toán tại đây */}
    </SafeAreaView>
  );
};

export default AdminForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
  },
  header: {
    padding: 20,
    backgroundColor: '#6a51ae',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 16,
    paddingTop: 10,
  },
  moreButton: {
    // Style cho nút More
  },
  moreButtonText: {
    color: 'blue',
    // Thêm style khác nếu cần
  },
});
