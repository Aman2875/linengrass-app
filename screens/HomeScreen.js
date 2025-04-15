import {
  StyleSheet,
  Text,
  View,
  Alert,
  Pressable,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  ImageBackground
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart)
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "We are Loading Your Location..."
  );
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services are not Enabled ",
        "Please enable the location Services ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied ",
        "Allow the app to use the Location services  ",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }

    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      // console.log(coords)
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // console.log(response)

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;
    const fetchProducts = () => {
      services.map((service, index) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

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

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://goodhomes.wwmindia.com/content/2020/aug/system-of-linengrass-1596279172.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <ScrollView style={styles.contentContainer}>
          <View
            style={{ padding: 10, flexDirection: "row", alignItems: "center" }}
          >
            <MaterialIcons name="location-on" size={36} color="#fd5c63" />
            <View>
              <Text style={styles.title}>Home</Text>
              <Text>{displayCurrentAddress}</Text>
            </View>

            <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 9 }}>
              <Image
                style={{ width: 40, height: 40, borderRadius: 20 }}
                source={{
                  uri: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpgr",
                }}
              />
            </Pressable>
          </View>

          {/*  Search bar */}

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
            <TextInput placeholder="Search For Items or More" />
            <Feather name="search" size={24} color="#fd5c63" />
          </View>

          {/* Image  Carousel  */}
          <Carousel />

          {/* services  */}
          <Services />

          {/* Removed "Render all the products" section */}

        </ScrollView>
        
        {/* Removed Pressable component */}

        <BottomTabNavigator />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    marginTop: 35,
    marginBottom: 70,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  }
});

export default HomeScreen;


