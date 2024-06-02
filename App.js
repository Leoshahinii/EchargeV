import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Stations from './src/Stations';
import Home from './src/Home';
import Profile from './src/Profile';


import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  const [activeTab, setActiveTab] = useState('Stations');
  const [stations, setStations] = useState([]);
  const [activeBookingTab, setActiveBookingTab] = useState('Book Now'); // New state for booking tab

  const handleStationsPress = () => {
    setActiveTab('Stations');
  };

  const handleHomePress = () => {
    setActiveTab('Home');
  };

  const handleProfilePress = () => {
    setActiveTab('Profile');
  };

 
  return (
    <View style={styles.container}>
      {activeTab === 'Stations' && <Stations stations={stations} />}
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Profile' && <Profile />}
    
      <View style={styles.navbar}>
        <TouchableOpacity style={[styles.navItem, activeTab === 'Stations' && styles.activeNavItem]} onPress={handleStationsPress}>
          <Ionicons name="ios-car" size={24} color={activeTab === 'Stations' ? '#000' : '#0f0'} />
          <Text style={[styles.navText, activeTab === 'Stations' && styles.activeNavText]}>Stations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, activeTab === 'Home' && styles.activeNavItem]} onPress={handleHomePress}>
          <Ionicons name="ios-home" size={24} color={activeTab === 'Home' ? '#0f0' : '#0f0'} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navItem, activeTab === 'Profile' && styles.activeNavItem]} onPress={handleProfilePress}>
          <Ionicons name="ios-person" size={24} color={activeTab === 'Profile' ? '#0f0' : '#0f0'} />
        </TouchableOpacity>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#121212',
    paddingVertical: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0f0',
  },
  activeNavItem: {
    backgroundColor: '#0f0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  activeNavText: {
    color: '#000',
  },
});
