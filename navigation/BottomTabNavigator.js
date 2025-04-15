import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <View style={styles.navColumn}>
        <MaterialCommunityIcons name="account-group" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Community</Text>
      </View>

      <View style={styles.navColumn}>
        <MaterialCommunityIcons name="rocket-launch" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Journeys</Text>
      </View>

      <View style={styles.navCenterColumn}>
        <Pressable style={styles.startJourneyButton}>
          <LinearGradient
            colors={['#40E0D0', '#4CAF50']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientButton}
          >
            <Text style={styles.startJourneyText}>Start{'\n'}Journey</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <View style={styles.navColumn}>
        <MaterialIcons name="account-balance-wallet" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Wallet</Text>
      </View>

      <View style={styles.navColumn}>
        <MaterialCommunityIcons name="store" size={24} color="#4CAF50" />
        <Text style={styles.navText}>Shop</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: 15,
  },
  navColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navCenterColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    transform: [{ translateY: 5 }],
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: '#4CAF50',
  },
  startJourneyButton: {
    width: 70,
    height: 70,
    borderRadius: 40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    overflow: 'hidden',
  },
  gradientButton: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  startJourneyText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18,
    textShadowColor: 'rgba(27, 5, 5, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
});

export default BottomTabNavigator;