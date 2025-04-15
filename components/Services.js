import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const Services = () => {
    const navigation = useNavigation();
    const services = [
        {
          id: "11",
          image: "https://onekindesign.com/wp-content/uploads/2016/03/Laundry-Room-Organization-Ideas-19-1-Kindesign.jpg",
          name: "Laundry",
        },
        {
          id: "13",
          image: "https://d3szusisidr5j6.cloudfront.net/business/gallery/3_1.jpg",
          name: "Rental",
        },
    ];
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Services Available</Text>
            
            <View style={styles.row}>
                {services.map((service, index) => (
                    <Pressable 
                        key={index} 
                        style={styles.column}
                        onPress={() => {
                            if(service.name === "Laundry") {
                                navigation.navigate("Laundry");
                            }
                        }}
                    >
                        <View style={styles.card}>
                            <View style={styles.imageContainer}>
                                <Image 
                                    source={{ uri: service.image }} 
                                    style={styles.image}
                                />
                            </View>
                            
                            <View style={styles.divider} />
                            
                            <View style={styles.textContainer}>
                                <Text style={styles.serviceName}>
                                    {service.name}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({
    section: {
        padding: 10,
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 7
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    column: {
        width: '48%',
        marginBottom: 10
    },
    card: {
        backgroundColor: "white",
        borderRadius: 7,
        shadowColor: '#171717',
        shadowOpacity: 0.8,
        shadowOffset: { width: -2, height: 4 },
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: 200
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    divider: {
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0'
    },
    textContainer: {
        padding: 10,
        alignItems: 'center'
    },
    serviceName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16
    }
})