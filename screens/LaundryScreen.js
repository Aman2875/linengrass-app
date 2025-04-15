import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";

const LaundryScreen = () => {
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.product);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-shirt",
      quantity: 0,
      price: 10,
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "Dresses",
      quantity: 0,
      price: 10,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "Jeans",
      quantity: 0,
      price: 10,
    },
    {
      id: "14",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 10,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "Shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "16",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 10,
    },
  ];

  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  return (
    <ImageBackground 
      source={{ uri: 'https://goodhomes.wwmindia.com/content/2020/aug/system-of-laundry-1596279172.jpg' }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView style={{ flex: 1, marginTop: 35, marginBottom: 15 }}>
        <View style={{ padding: 10, flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons name="location-on" size={36} color="#fd5c63" />
          <View>
            <Text style={styles.title}>Laundry Services</Text>
          </View>
        </View>

        {/* Search bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1.0,
            borderColor: "#C0C0C0",
            borderRadius: 7,
            backgroundColor: "white",
          }}
        >
          <TextInput placeholder="Search For Items" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Render all the products  */}

        {product.map((item, index) => (
            <DressItem item={item} key={index} />
        ))}
      </ScrollView>
     
      {total === 0 ? null : (
          <Pressable
            style={{
              backgroundColor: "#088F8F",
              padding: 10,
              margin: 10,
              borderRadius: 7,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <View>
              <Text style ={{fontSize:15 , fontWeight:"800" , color: "white" }}>{cart.length} items | ₹ {total} </Text>
              <Text style={{fontSize:13, fontWeight:"400" , color : "white" ,marginVertical :6  }}>Extra Charges might apply </Text>
            </View>
            <Pressable onPress={() => navigation.navigate("PickUp")}>
              <Text style ={{fontSize: 17 , fontWeight:"bold" , color : "white"}}>Proceed to PickUp</Text>
            </Pressable>
          </Pressable>
        )}
      </ImageBackground>
    );
  };

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LaundryScreen; 