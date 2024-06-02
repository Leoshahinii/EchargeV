import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Profile = ({ username }) => {
  const totalChargingTime = "10 hours"; // Example data, you can replace it with actual data
  const totalEnergyDelivered = "50 kWh"; // Example data, you can replace it with actual data
  const chargingSessions = 5; // Example data, you can replace it with actual data

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey,JUNCTIOONXTIRANA</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overview</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Total Charging Time:</Text>
          <Text style={styles.infoValue}>{totalChargingTime}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Total Energy Delivered:</Text>
          <Text style={styles.infoValue}>{totalEnergyDelivered}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Charging Sessions:</Text>
          <Text style={styles.infoValue}>{chargingSessions}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Personal Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>E-mail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Delete Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          This is the profile page of the application.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background color
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFF', // White text color
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF', // White text color
  },
  infoItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#FFF', // White text color
  },
  infoValue: {
    color: '#FFF', // White text color
  },
  settingItem: {
    borderWidth: 1,
    borderColor: '#FFF', // White border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  settingText: {
    color: '#FFF', // White text color
  },
  aboutText: {
    color: '#FFF', // White text color
    lineHeight: 20, // Increased line height for better readability
  },
});

export default Profile;
