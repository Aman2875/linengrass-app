import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";

import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
const PickUpScreen = () => {
    const cart = useSelector((state) => state.cart.cart);
    // console.log(cart)
    const total = cart
      .map((item) => item.quantity * item.price)
      .reduce((curr, prev) => curr + prev, 0);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setselectedTime] = useState([]);
  const [Delivery, setDelivery] = useState([]);
  var date = new Date().getDate();
  if (date <= 9) {
    var x = date;
    date = "0" + x;
  }
  var month = new Date().getMonth() + 1;
  if (month <= 9) {
    var x = month;
    month = "0" + x;
  }
  var year = new Date().getFullYear();
  var dateString = year + "-" + month + "-" + date;
  var finaldate = String(dateString).trim();
  var endDay = 28;
  var endmonth = month;
  if (endDay > 15) {
    endmonth = new Date().getMonth() + 2;
    if (endmonth <= 9) {
      var x = endmonth;
      endmonth = "0" + x;
    }
  }
  var endYear = year;
  if (month == 12) {
    endYear = endYear + 1;
  }

  var endDateStr = endYear + "-" + endmonth + "-" + endDay;
  var finalEndDate = String(endDateStr).trim();

  const deliveryTime = [
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
    {
      id: "4",
      name: "Tommorrow",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 PM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "1:00 PM",
    },
    {
      id: "3",
      time: "2:00 PM",
    },
    {
      id: "4",
      time: "3:00 PM",
    },
    {
      id: "5",
      time: "4:00 PM",
    },
  ];

  const navigation = useNavigation();

  const proceedToCart = () => {
    if( !selectedDate || !selectedTime || !Delivery){
        Alert.alert(
            "Empty or Invalid",
            "Please select All the fields",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    if(selectedDate && selectedTime && Delivery) {
       navigation.replace("Cart",{
        pickUpDate : selectedDate,
        selectedTime: selectedTime,
        no_Of_days:Delivery,
       })
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={{ uri: 'https://goodhomes.wwmindia.com/content/2020/aug/system-of-laundry-1596279172.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.contentContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              marginHorizontal: 17,
              marginVertical: 12,
            }}
          >
            Enter Address
          </Text>
          <TextInput
            style={{
              margin: 12,
              padding: 28,
              borderColor: "gray",
              borderWidth: 0.7,
              paddingVertical: 60,
              borderRadius: 9,
              backgroundColor: 'rgba(255, 255, 255, 0.9)'
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 17,
                marginVertical: 12,
              }}
            >
              PickUp Date
            </Text>

            <HorizontalDatepicker
              mode="gregorian"
              startDate={new Date(finaldate)}
              endDate={new Date(finalEndDate)}
              initialSelectedDate={new Date(finaldate)}
              onSelectedDateChange={(date) => setSelectedDate(date)}
              selectedItemWidth={170}
              unselectedItemWidth={38}
              itemHeight={38}
              itemRadius={10}
              selectedItemTextStyle={styles.selectedItemTextStyle}
              unselectedItemTextStyle={styles.selectedItemTextStyle}
              selectedItemBackgroundColor="#222831"
              unselectedItemBackgroundColor="#ececec"
              flatListContainerStyle={styles.flatListContainerStyle}
            />
          </View>

          <View style={{ marginBottom: 395 }}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 17,
              }}
            >
              Select Time
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {times.map((item, index) => (
                <Pressable
                  onPress={() => setselectedTime(item.time)}
                  key={index}
                  style={[
                    styles.timeButton,
                    selectedTime.includes(item.time) && styles.selectedTimeButton
                  ]}
                >
                  <Text style={{ fontWeight: "bold" }}>{item.time}</Text>
                </Pressable>
              ))}
            </ScrollView>
            <Text style={{
                fontSize: 17,
                fontWeight: "500",
                marginHorizontal: 17,
              }}>
                Delivery Date 
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {deliveryTime.map((item,index)=> (
                    <Pressable 
                        key={index} 
                        onPress={()=> setDelivery(item.name)}
                        style={[
                            styles.timeButton,
                            Delivery.includes(item.name) && styles.selectedTimeButton
                        ]}
                    >
                        <Text style={{fontWeight:"bold"}}>{item.name}</Text>
                    </Pressable>
                ))}
            </ScrollView>
          </View>
        </SafeAreaView>

        {total === 0 ? null : (
            <Pressable
              style={styles.proceedButton}
            >
              <View>
                <Text style={styles.proceedButtonText}>{cart.length} items | ₹ {total} </Text>
                <Text style={styles.proceedButtonSubText}>Extra Charges might apply </Text>
              </View>
              <Pressable onPress={proceedToCart}>
                <Text style={styles.proceedButtonText}>Proceed to Cart</Text>
              </Pressable>
            </Pressable>
        )}
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
    padding: 15,
  },
  timeButton: {
    margin: 10,
    borderRadius: 7,
    padding: 15,
    borderColor: "gray",
    borderWidth: 0.8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  },
  selectedTimeButton: {
    borderColor: "red",
    borderWidth: 0.8,
  },
  proceedButton: {
    backgroundColor: "#088F8F",
    padding: 10,
    marginBottom: 30,
    margin: 15,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  proceedButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white"
  },
  proceedButtonSubText: {
    fontSize: 13,
    fontWeight: "400",
    color: "white",
    marginVertical: 6
  }
});

export default PickUpScreen;
